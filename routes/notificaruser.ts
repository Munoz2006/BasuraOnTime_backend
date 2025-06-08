// src/routes/sms.ts
import { Router, Request, Response } from 'express';
import  { enviarSMSVonage } from '../Helpers/notificaciones/sms';

const router = Router();

router.post('/enviar-sms', async (req: Request, res: Response) => {
  const { numero, mensaje } = req.body;

  try {
    const resultado = await enviarSMSVonage(numero, mensaje);
    res.json({ success: true, resultado });
  }  catch (error: unknown) {
  const err = error as Error;
  res.status(500).json({ success: false, error: err.message });
}
});

export default router;


