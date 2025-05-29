class User {
    
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _password: string;
    private _telefono: string;

    constructor(
        email: string, nombres: string,
        apellidos: string, 
        password: string,
        telefono: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._password = password
        this._telefono = telefono;
    }

    // Getters
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
    
    // Setters
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
}

export default User;