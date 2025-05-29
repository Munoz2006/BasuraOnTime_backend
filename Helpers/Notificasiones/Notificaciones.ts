// import webpush from 'web-push'; //// por correo electronico

// webpush.setVapidDetails(
//   'mailto:osorioosorioesteban@gmail.com',
//   'TU_PUBLIC_VAPID_KEY',
//   'TU_PRIVATE_VAPID_KEY'
// );

// const payload = JSON.stringify({
//   title: '¡Hola!',
//   message: 'Tu camión de basura ya está cerca.'
// });

// webpush.sendNotification(subscription, payload);

////////////////////////////////////////////////////////////////////////////////////

// npm install firebase-admin --save descargar firebase-admin para usar

import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(require('./firebase-service-account.json'))
});

const message = {
  token: 'TU_TOKEN_DEL_DISPOSITIVO',
  notification: {
    title: '¡Atención!',
    body: 'El camión de basura está en tu zona.'
  }
};

admin.messaging().send(message)
  .then(response => console.log('Notificación enviada:', response))
  .catch(err => console.error('Error al enviar:', err));
