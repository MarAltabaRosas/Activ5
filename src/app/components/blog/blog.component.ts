import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  newNoticia: Noticia = {title:"", img: "", text: "", date: new Date(0)};

  @Input() misNoticias: Noticia[] = []
  @Output() noticiaEmitida: EventEmitter<Noticia>

  constructor(){
    this.noticiaEmitida = new EventEmitter();
  }

  cargarNoticias(): any{
 
    let html = "";
    this.misNoticias.forEach(noticia => {
      html += `<article class="news">
                <h2>${noticia.title}</h2>
                <img class="news__img" src ="${noticia.img}" alt="">
                <p>${noticia.text}</p>
                <p>${noticia.date}</p>                
                </article>`
    })
    return html;  
  }

  getDataForm(){
    this.noticiaEmitida.emit(this.newNoticia);
  }
}
