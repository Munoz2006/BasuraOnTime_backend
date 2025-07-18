export function generarContrasenaAleatoria(longitud: number = 8): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let contrasena = '';
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[randomIndex];
  }
  return contrasena;
}


export default generarContrasenaAleatoria