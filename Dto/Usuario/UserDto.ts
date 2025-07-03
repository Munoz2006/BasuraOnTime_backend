class User {
    private _id_rol: number;
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _password: string;
    private _telefono: string;
    private _latitud: number;
    private _longitud: number;


    constructor(
        id_rol: number, email: string, nombres: string,
        apellidos: string, 
        password: string,
        telefono: string,
        latitud: number,
        longitud: number
    ) {
        this._id_rol = id_rol;
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._password = password
        this._telefono = telefono;
        this._latitud = latitud;
        this._longitud = longitud;
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


    get latitud(): number {
        return this._latitud;
    }
    
    get longitud(): number {
        return this._longitud;
    }

    // Setters
    set id_rol(id_rol: number) {
        this._id_rol = id_rol;
    }

    set email(email: string) {
        this._email = email;
    }

    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set telefono(telefono: string) {
        this._telefono = telefono;
    }

    set password(password: string) {
        this._password = password;
    }

    set latitud(latitud: number) {
        this._latitud = latitud;
    }
    
    set longitud(longitud: number) {
        this._longitud = longitud;
    }
}

export default User;