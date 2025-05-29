// con este y el firebase manejamos las notificaciones wep y movil
import { messaging, getToken } from './firebase';

navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then((registration) => {
    return getToken(messaging, {
      vapidKey: 'TU_PUBLIC_VAPID_KEY',
      serviceWorkerRegistration: registration,
    });
  })
  .then((token) => {
    console.log('🎯 Token del navegador:', token);
    // Envíalo a tu backend
  })
  .catch(console.error);

        