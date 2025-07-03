class Solicitud{

    private _zona: string;
    private _fecha_solicitud: string;
    private _cantidad: number;
    private _tipo_residuo: string;
    private _tamano: string;
    private _id: number;

    constructor(
        cantidad: number,
        tipo_residuo: string, tamano: string, 
        zona: string, fecha_solicitud: string,
        id: number
    ){
        this._cantidad = cantidad;
        this._tipo_residuo = tipo_residuo;
        this._tamano = tamano;
        this._zona = zona;
        this._fecha_solicitud = fecha_solicitud;
        this._id = id;
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
    
    get id(): number {
        return this._id;
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
    set id(id: number){
        this._id = id;
    }
}
export default Solicitud;