import { Autenticacao } from "./aut";
import { Growbook } from './growbook';
import { Card } from './card';

class App {
    constructor() {
        this.growbook = new Growbook();
        this.autenticacao = new Autenticacao();
        this.objetoMensagem = document.getElementById('mensagem');
        this.botaoEnviar = document.getElementById('comentar');
        this.id = 0;
        this.email = document.getElementById('email');
        this.senha = document.getElementById('senha');
        this.btnEntrar = document.getElementById('btnLogin');
        


        this.registrarEventos();

        this.mostrar();
    }

    registrarEventos() {
        this.btnEntrar.onclick = () => {
            this.autenticacao.entrar(this.email.value, this.senha.value);
        }

        this.botaoEnviar.onclick = () => {
            this.growbook.adicionaComentario(
               
                this.objetoMensagem.value
            );

            this.mostrar();
        }
    }


    mostrar() {
        const divComentarios = document.getElementById("comentarios");
        let novoHTML = '';
    
        const novalista = this.growbook.pegarDados().slice(
            0, 
            this.growbook.pegarDados().length
        );
    
        novalista.reverse();
    
        novalista.forEach(comentario => {
            const card = new Card(comentario);
            novoHTML += card.pegaCard();
        });
    
        divComentarios.innerHTML = novoHTML;

        
    }
}

const app = new App();
