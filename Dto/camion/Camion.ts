class Camion{
    private _placa : string;
    private _modelo : string;
    private _capacidad : string;
    private _estado_camion : string;
    private _marca: string;
    private _tipo_C : string;

    constructor( 
        placa : string,
        modelo : string,
        capacidad : string,
        estado_camion : string,
        marca : string,
        tipo_C : string
    ){
        this._placa = placa;
        this._modelo = modelo;
        this._capacidad = capacidad;
        this._estado_camion = estado_camion;
        this._marca = marca;
        this._tipo_C = tipo_C;
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

    get tipo_C() : string{
        return this._tipo_C;
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

    set tipo_C(tipo_C: string){
        this._tipo_C = tipo_C;
    }
}

export default Camion;