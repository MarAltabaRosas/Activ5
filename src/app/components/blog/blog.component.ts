import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  newNoticia: Noticia = {title:"", img: "", text: "", date: new Date("mm/dd/yyyy")};

  @Input() misNoticias: Noticia[] = []
  @Output() noticiaEmitida: EventEmitter<Noticia>

  constructor(){
    this.noticiaEmitida = new EventEmitter();
  }

  cargarNoticias(): string{


 
    let html = "";
    this.misNoticias.forEach(noticia => {
      html += `<article class="news">
                <h2>${noticia.title}</h2>
                <img class="news__img" src ="${noticia.img}" alt="">
                <p>${noticia.text}</p>
                <p class="news__date">${noticia.date}</p>                
                </article>`
    })
    return html;  
  }

  getDataForm(){
    if(this.newNoticia.title === ""){
      alert("Introduzca el título, es un campo obligatorio.")
    }else if(this.newNoticia.img === ""){
      alert("Introduzca la URL de la imagen, es un campo obligatorio.")
    }else if(this.newNoticia.text === ""){
      alert("Introduzca el cuerpo de la noticia, es un campo obligatorio.")
    }else if(Number.isNaN(this.newNoticia.date.valueOf())){
      alert("Introduzca la fecha de publicación, es un campo obligatorio.")  
    }else{
    this.newNoticia.date = (new Date(this.newNoticia.date));
    this.noticiaEmitida.emit(this.newNoticia);
    this.newNoticia = {title:"", img: "", text: "", date: new Date("mm/dd/yyyy")};
    }
  }
}
