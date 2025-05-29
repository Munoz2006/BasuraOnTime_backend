import nodemailer from 'nodemailer';

 export const sendRecoveryEmail = async (to: string, link: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"hola',
      to,
      subject: 'Recuperación de contraseña',
      html: `<p>Haz clic en el siguiente enlace para recuperar tu contraseña:</p><a href="${link}">${link}</a>`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
};

