// services/TruckService.ts
import axios from 'axios';
import UsuarioRepository from '../../repositories/Usuario/UsuarioRepository2';
import dotenv from "dotenv";
dotenv.config();

export default class TruckService {
  private usuarioRepository: UsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async verificarUsuariosCercanos(truckLat: number, truckLng: number) {
    const usuarios = await this.usuarioRepository.getAllUsuarios();
    
    // Filtrar y convertir usuarios con coordenadas válidas
    const usuariosConCoordenadas = usuarios.filter(user => {
      if(user.id_rol !== 2){
        return false
      }
      // Verificar que no sean null/undefined
      if (user.latitud === null || user.longitud === null || 
          user.latitud === undefined || user.longitud === undefined) {
        return false;
      }
      
      // Convertir a números
      const lat = parseFloat(user.latitud);
      const lng = parseFloat(user.longitud);
      
      // Validar que la conversión fue exitosa
      if (isNaN(lat) || isNaN(lng)) {
        return false;
      }
      
      // Actualizar los valores convertidos en el objeto
      user.latitud = lat;
      user.longitud = lng;
      
      return true;
    });
    const usuariosCercanos: { userId: number; distanciaKm: number }[] = [];

    for (const user of usuariosConCoordenadas) {
      try {
        const distanciaKm = await this.calcularDistanciaGoogle(
          truckLat,
          truckLng,
          user.latitud,
          user.longitud
        );

        if (distanciaKm <= 2) {
          usuariosCercanos.push({
            userId: user.id_usuario,
            distanciaKm,
          });
        } else {
          console.log(`Usuario ${user.id_usuario} está lejos: ${distanciaKm.toFixed(2)}km`);
        }
      } catch (error) {
        if (error && typeof error === 'object' && 'message' in error) {
          console.error(`Error calculando distancia para usuario ${user.id_usuario}:`, (error as { message?: string }).message);
        } else {
          console.error(`Error calculando distancia para usuario ${user.id_usuario}:`, error);
        }
      }
    }

    return usuariosCercanos;
  }

  async calcularDistanciaGoogle(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): Promise<number> {
    // Validar coordenadas
    if (!this.validarCoordenadas(lat1, lng1, lat2, lng2)) {
      throw new Error('Coordenadas inválidas');
    }

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json`;
    
    try {
      const response = await axios.get(url, {
        params: {
          origins: `${lat1},${lng1}`,
          destinations: `${lat2},${lng2}`,
          key: process.env.GOOGLE_MAPS_API_KEY,
          units: 'metric',
        }, 
      });

      // Validar estructura de respuesta
      if (!response.data) {
        throw new Error('Respuesta vacía de Google Maps API');
      }

      if (response.data.status !== 'OK') {
        throw new Error(`Error en Google Maps API: ${response.data.status} - ${response.data.error_message || 'Sin detalles'}`);
      }

      // Validar que existan rows
      if (!response.data.rows || !Array.isArray(response.data.rows) || response.data.rows.length === 0) {
        throw new Error('No se encontraron rutas en la respuesta');
      }

      const firstRow = response.data.rows[0];
      if (!firstRow || !firstRow.elements || !Array.isArray(firstRow.elements) || firstRow.elements.length === 0) {
        throw new Error('No se encontraron elementos de distancia');
      }

      const element = firstRow.elements[0];
      if (!element) {
        throw new Error('Elemento de distancia vacío');
      }

      // Verificar status del elemento específico
      if (element.status !== 'OK') {
        throw new Error(`Error en cálculo de distancia: ${element.status}`);
      }

      // Validar que existan los datos de distancia
      if (!element.distance || typeof element.distance.value !== 'number') {
        throw new Error('Datos de distancia inválidos');
      }

      const meters = element.distance.value;
      return meters / 1000;

    } catch (error) {
      if (typeof error === 'object' && error !== null) {
        const err = error as { code?: string; response?: any; message?: string };
        if (err.code === 'ECONNABORTED') {
          throw new Error('Timeout al conectar con Google Maps API');
        }
        if (err.response) {
          throw new Error(`Error HTTP ${err.response.status}: ${err.response.data?.error_message || 'Error desconocido'}`);
        }
        // Re-lanzar el error si ya tiene un mensaje específico
        throw err;
      }
      // Si el error no es un objeto, relanzar tal cual
      throw error;
    }
  }

  private validarCoordenadas(lat1: number, lng1: number, lat2: number, lng2: number): boolean {
    const coordenadas = [lat1, lng1, lat2, lng2];
    
    // Verificar que todas las coordenadas sean números válidos
    const todasValidas = coordenadas.every(coord => 
      coord !== null && 
      coord !== undefined && 
      typeof coord === 'number' && 
      !isNaN(coord) && 
      isFinite(coord)
    );
    
    if (!todasValidas) {
      return false;
    }
    
    // Verificar rangos válidos
    const rangoValido = lat1 >= -90 && lat1 <= 90 &&
                       lat2 >= -90 && lat2 <= 90 &&
                       lng1 >= -180 && lng1 <= 180 &&
                       lng2 >= -180 && lng2 <= 180;
    
    if (!rangoValido) {
      return false;
    }
    
    return true;
  }
}