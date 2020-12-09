import { Comentario } from './comentario';

export class Growbook {
    constructor() {
        this.listaDeComentarios = [];
        this.recuperarDados();
    }

    proximoId() {
        let maior = 0;

        this.listaDeComentarios.forEach(f => {
            maior = Math.max(maior, f.id);
        });
    
        return ++maior;  
    }

    adicionaComentario(mensagem) {
        const comentario = new Comentario(
            this.proximoId(), 
                      mensagem
        );

        this.listaDeComentarios.push(comentario);

        this.salvarDados();
    }

    salvarDados() {
        localStorage.setItem("salvo", JSON.stringify(this.listaDeComentarios));
    }

    recuperarDados() {
        const dados = localStorage.getItem("salvo");     

        this.listaDeComentarios = JSON.parse(dados ?? "[]");
    }

    pegarDados() {
        return this.listaDeComentarios;
    }
    

        salvarItem(id, mensagem) {
        const indice = this.listaDeComentarios.findIndex(r => r.id === parseInt(id));
    
        
        this.listaDeComentarios[indice].comentario = mensagem;
    
        this.salvarDados(this.listaDeComentarios);
    }
}
