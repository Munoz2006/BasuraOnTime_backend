class Documento {
  nombre_archivo: string;
  archivo_pdf: Buffer;

  constructor(nombre_archivo: string, archivo_pdf: Buffer) {
    this.nombre_archivo = nombre_archivo;
    this.archivo_pdf = archivo_pdf;
  }
}

export default Documento;
