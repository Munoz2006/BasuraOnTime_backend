import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import estado_camion from './routes/estado_camion';
import solicitudes from './routes/solicitudes';
import authAdmin from './routes/authAdmin';
import startAdmin from './routes/startAdmin';
import configCamionAdmin from './routes/configCamionAdmin'
import addCamionAdmin from './routes/addCamionAdmin';
import modificarCamionAdmin from './routes/modificarCamionAdmin';
import deleteCamionAdmin from './routes/deleteCamionAdmin';
import deleteUser from './routes/deleteUser';
import editUser from './routes/editUser';
import recoverPassword from './routes/recoverPassword';
import validateEmail from './routes/validatePassword';
import notificarUser from './routes/notificaruser';
import configSoliAdmin from './routes/configSoliAdmin';
import conductor from "./routes/conductores";
import editconductor from "./routes/editConductores";
import elminarConductor from "./routes/deleteConductor";
import documento from "./routes/uploadDocumento";
import mostrarDoc from "./routes/mostrarDocumento";
import mostrarUbi from "./routes/mostrarUbiUser";

import dotenv from "dotenv";
dotenv.config(); 

const app = express().use(bodyParser.json());
app.use(cors());

// rutas usuario
app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/start', estado_camion);
app.use('/requests', solicitudes);
app.use('/deleteUser', deleteUser);
app.use('/editUser', editUser);
app.use('/reset-password', recoverPassword);
app.use('/validateEmail', validateEmail);
app.use('/deleteTruck', deleteCamionAdmin);
app.use ('/mostrar', mostrarDoc)
app.use('/mostrarUbicacion', mostrarUbi);
// rutas admin
app.use('/authAdmin', authAdmin);
app.use('/startAdmin', startAdmin); 
app.use('/settingsTruck', configCamionAdmin);
app.use('/addTruck', addCamionAdmin);
app.use('/modifyTruck', modificarCamionAdmin);
app.use ('/notifiaciones', notificarUser);
app.use('/settingsRequest', configSoliAdmin);
app.use ('/documentos',documento)
 

//conductores
app.use ('/agregarConductor',conductor);
app.use ("/editConductor", editconductor)
app.use ("/deletConductor", elminarConductor)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
app.post('/api/conductores/test', (req, res) => {
  console.log('¡Llegó la petición!', req.body);
  res.status(200).json({ mensaje: 'Recibido' });
});

