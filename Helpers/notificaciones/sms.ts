
import dotenv from 'dotenv';
dotenv.config();

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

export const enviarSMSVonage = async (numeroDestino: string, mensaje: string) => {
  const from = process.env.VONAGE_PHONE_NUMBER!;
  const to = numeroDestino;

  try {
    const respuesta = await vonage.sms.send({ to, from, text: mensaje });
    console.log('✅ SMS enviado:', respuesta);
    return respuesta;
  } catch (error) {
    console.error('❌ Error al enviar SMS:', error);
    throw error;
  }
};

export default enviarSMSVonage;

// const { Vonage } = require('@vonage/server-sdk')

// const vonage = new Vonage({
//   apiKey: process.env.VONAGE_API_KEY,
//   apiSecret: process.env.VONAGE_API_SECRET
// }