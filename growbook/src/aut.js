import { Usuarios } from "./users";

export class Autenticacao {
    constructor() {

    }


entrar(inputUsuario, inputSenha) {
    //usar o find
    if (inputUsuario === Usuarios.usuario && inputSenha === Usuarios.senha) {
        localStorage.setItem("Login", JSON.stringify(inputUsuario));
        document.getElementById("pageLogin").style.display = "none";
        document.getElementById("page").style.display = "block";
    } else {
        alert('Usuário ou senha incorretos!');
    }
}
}
