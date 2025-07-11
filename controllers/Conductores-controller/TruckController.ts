// controllers/TruckController.ts

import { Server, Socket } from "socket.io";
import TruckService from "./../../services/Conductor/TruckService";
import ConductorRepository from "../../repositories/Conductores/ConductoresRepository";
import { Request, Response } from "express";

export default class TruckController {
  private truckService: TruckService;
  private io: Server;
  private userSockets: Map<string, Socket>;
  private lastTruckLocation: { lat: number; lng: number; timestamp: Date } | null;
  private  truckId: number | null = null;

  constructor(truckService: TruckService, io: Server, userSockets: Map<string, Socket>) {
    this.truckService = truckService;
    this.io = io;
    this.userSockets = userSockets;
    this.lastTruckLocation = null;

    this.updateTruckLocation = this.updateTruckLocation.bind(this);
    this.getTruckLocation = this.getTruckLocation.bind(this);
  }

  async updateTruckLocation(req: Request, res: Response) {
    delete req.body.rol
    const { lat, lng, estado, id} = req.body;
    if (!lat || !lng || !estado) {
      return res.status(400).json({ error: 'Faltan datos de conductor' });
    }
    
    this.truckId = id;
    const guardarDatos = await ConductorRepository.modifiyConductor(lat, lng, estado, id)
    this.lastTruckLocation = { lat, lng, timestamp: new Date() };

    try {
      const usuariosCercanos = await this.truckService.verificarUsuariosCercanos(lat, lng);

      for (const [userId, socket] of this.userSockets.entries()) {
        console.log(`  - Usuario ${userId} -> Socket ${socket.id}`);
      }

      let notificacionesEnviadas = 0;

      usuariosCercanos.forEach((u) => {
        const userIdStr = String(u.userId);

        const socket = this.userSockets.get(String(userIdStr));

        if (socket && socket.connected) {
          socket.emit('truck_nearby', {
            message: `El camion esta a ${u.distanciaKm.toFixed(2)} km de distancia`,
            truckLocation: { lat, lng },
            timestamp: new Date(),
            userId: u.userId,
            distanciaKm: u.distanciaKm,
          });

          notificacionesEnviadas++;
        } else {
          this.userSockets.delete(userIdStr);
        }
      });

      return res.json({
        status: 'Ubicación procesada',
        usuariosCercanos: usuariosCercanos.length,
        notificacionesEnviadas,
        usuariosConectados: this.userSockets.size,
        notificados: usuariosCercanos
          .filter(u => this.userSockets.has(String(u.userId)))
          .map(u => u.userId),
      });

    } catch (error) {
      return res.status(500).json({
        error: 'Error interno del servidor',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  async getTruckLocation(req: Request, res: Response) {
    if (!this.lastTruckLocation) {
      return res.status(404).json({ error: 'No hay ubicación aún.' });
    }

    if(!this.truckId){
      return res.status(404).json({ error: 'No hay ubicación aún 2.' });
    }
    const consultarEstado = await ConductorRepository.consultarEstado(this.truckId);
    
    if(consultarEstado == "Activo"){
      return res.json(this.lastTruckLocation);
    }else{
      return res.status(404).json({ error: 'No hay ubicación aún 2.' });  
    }
  }

  // Método para debuggear usuarios conectados
  getConnectedUsers() {
    return Array.from(this.userSockets.entries()).map(([userId, socket]) => ({
      userId,
      socketId: socket.id,
      connected: socket.connected,
    }));
  }

  // Método para limpiar sockets desconectados
  cleanupDisconnectedSockets() {
    for (const [userId, socket] of this.userSockets.entries()) {
      if (!socket || !socket.connected) {
        this.userSockets.delete(userId);
      }
    }
  }
}
