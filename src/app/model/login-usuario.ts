export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    constructor (nombreUsuario: string, ppassword: string){
        this.nombreUsuario = nombreUsuario;
        this.password = ppassword;
    }
}
