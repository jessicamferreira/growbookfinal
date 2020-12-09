export class Card {
    constructor(comentario) {
        this.comentario = comentario;
           }

    pegaCard() {
        return `
        <div class="one-comment" id="${this.comentario.id}">
        <div class="add-comment" >
        <img class="avatar" src="../public/img/roger.jpg">
        <div class='comment-content'>
        <h4>Roger<span>Agora mesmo</span></h4>
        <p> ${this.comentario.comentario} </p>
       
      </div>
      </div>
      </div>
          `
        //                        <a href="#" class="edit-card" onclick="editar(${this.recado.id})" class="card-link" data-toggle="modal" data-target="#staticBackdrop">Editar</a>
    }
}