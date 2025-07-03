class Camion{
    private _placa : string;
    private _modelo : string;
    private _capacidad : string;
    private _estado_camion : string;
    private _marca: string;
    private _tipo_c : string;
    private _id : number;

    constructor( 
        placa : string,
        modelo : string,
        capacidad : string,
        estado_camion : string,
        marca : string,
        tipo_c : string,
        id? : number
    ){
        this._placa = placa;
        this._modelo = modelo;
        this._capacidad = capacidad;
        this._estado_camion = estado_camion;
        this._marca = marca;
        this._tipo_c = tipo_c;
        this._id = id ?? 0;
    }

    // Getters

    get placa(): string {
        return this._placa;
    }

    get modelo(): string {
        return this._modelo;
    }

    get capacidad(): string {
        return this._capacidad;
    }

    get estado_camion(): string {
        return this._estado_camion;
    }

    get marca(): string {
        return this._marca;
    }

    get tipo_c() : string{
        return this._tipo_c;
    }
    get id() : number{
        return this._id;
    }

    // Setters

    set placa(placa: string) {
        this._placa = placa;
    }

    set modelo(modelo: string){
        this._modelo = modelo;
    }

    set capacidad(capacidad: string){
        this._capacidad = capacidad;
    }

    set estado_camion(estado_camion: string){
        this._estado_camion = estado_camion;
    }

    set marca(marca: string){
        this._marca = marca;
    }

    set tipo_c(tipo_c: string){
        this._tipo_c = tipo_c;
    }
    set id(id : number){
        this._id = id;
    }
}

export default Camion;