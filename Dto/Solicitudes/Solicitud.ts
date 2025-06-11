class Solicitud{

    private _zona: string;
    private _fecha_solicitud: string;
    private _cantidad: number;
    private _tipo_residuo: string;
    private _tamano: string;
    private _estado: string;

    constructor(
        cantidad: number,
        tipo_residuo: string, tamano: string, 
        zona: string, fecha_solicitud: string,
        estado: string 
    ){
        this._cantidad = cantidad;
        this._tipo_residuo = tipo_residuo;
        this._tamano = tamano;
        this._zona = zona;
        this._fecha_solicitud = fecha_solicitud;
        this._estado = estado;
    }


    get zona(): string {
        return this._zona;
    }

    get fecha_solicitud(): string {
        return this._fecha_solicitud;
    }

    get cantidad(): number {
        return this._cantidad;
    }

    get tipo_residuo(): string {
        return this._tipo_residuo;
    }

    get tamano(): string {
        return this._tamano;
    }

    get estado(): string {
        return this._estado;
    }


    set zona(zona: string) {
        this._zona = zona;
    }
    set fecha_solicitud(fecha_solicitud: string) {
        this._fecha_solicitud = fecha_solicitud;
    }
    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

    set tipo_residuo(tipo_residuo: string) {
        this._tipo_residuo = tipo_residuo;
    }

    set tamano(tamano: string) {
        this._tamano = tamano;
    }
    set estado(estado: string) {
        this._estado = estado;
    }
}
export default Solicitud;