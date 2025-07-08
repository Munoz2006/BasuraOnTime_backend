class Conductor {
    private _id_rol: number;
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _telefono: string;
    private _password: string;
    private _tipo_licencia: string;
    private _fecha_vencimiento_licencia: string; // Tipo string en formato 'YYYY-MM-DD'
    private _fk_id_camion?: number; // Opcional, si se necesita
    
    constructor(
        id_rol: number,
        email: string,
        nombres: string,
        apellidos: string,
        telefono: string,
        password: string,
        tipo_licencia: string,
        fecha_vencimiento_licencia: string,
        fk_id_camion?: number // Opcional, si se necesita
    ) {
        this._id_rol = id_rol;
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._password = password;
        this._tipo_licencia = tipo_licencia;
        this._fecha_vencimiento_licencia = fecha_vencimiento_licencia;
        this._fk_id_camion = fk_id_camion;
    }

    // Getters
    
    get id_rol(): number {
        return this._id_rol;
    }

    get email(): string {
        return this._email;
    }

    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get telefono(): string {
        return this._telefono;
    }

    get password(): string {
        return this._password;
    }

    get tipo_licencia(): string {
        return this._tipo_licencia;
    }

    get fecha_vencimiento_licencia(): string{
        return this._fecha_vencimiento_licencia;
    }
    get fk_id_camion(): number | undefined {
        return this._fk_id_camion;
    }

    // Setters
    set id_rol(value: number) {
        this._id_rol = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set nombres(value: string) {
        this._nombres = value;
    }

    set apellidos(value: string) {
        this._apellidos = value;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    set password(value: string) {
        this._password = value;
    }

    set tipo_licencia(value: string) {
        this._tipo_licencia = value;
    }

    set fecha_vencimiento_licencia(value: string) {
        this._fecha_vencimiento_licencia = value;
    }
    set fk_id_camion(value: number | undefined) {
        this._fk_id_camion = value;
    }
}

export default Conductor;
