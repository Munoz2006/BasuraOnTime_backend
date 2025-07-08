import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // TLS
  secure: false, // debe ser false con el puerto 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});




export const enviarCorreo = async (destinatario: string, contrasena: string) => {
  await transporter.sendMail({
    from: `"Basura OnTime" <${process.env.EMAIL_USER}>`,
    to: destinatario,
    subject: 'Tu acceso a la plataforma',
    html: `
      <p>Hola, bienvenido a Basura OnTime 🚛</p>
      <p>Tu contraseña  es: <b>${contrasena}</b></p>
      <p> con tu mismo correo y esta contraseña podras iniciar sesion </p>
    `
    
  });
};

export default enviarCorreo