// import { enviarSMSVonage } from '../../NOTIFICACIONES/sms';

// export const  notificarUsuario = async () => {
//   const telefono = '573001112233'; // Sin "+"
//   const mensaje = '🗑️ El camión de basura está cerca. ¡Saca la basura a tiempo!';

//   try {
//     await enviarSMSVonage(telefono, mensaje);
//   } catch (error) {
//     console.error('Error enviando notificación por SMS:', error);
//   }
// };

// export default notificarUsuario;


import { enviarSMSVonage } from '../../Helpers/notificaciones/sms';

export const notificarUsuario = async () => {
  const telefono = '573001112233'; // Sin "+"
  const mensaje = '🗑️ El camión de basura está cerca. ¡Saca la basura a tiempo!';

  try {
    await enviarSMSVonage(telefono, mensaje);
  } catch (error) {
    console.error('Error enviando notificación por SMS:', error);
  }
};

export default notificarUsuario;
