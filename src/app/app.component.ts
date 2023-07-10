import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias: Noticia[] = [];

  constructor(){
    this.noticias = [
      {
        title: "Depeche Mode llevará su gira a España: tocarán en Madrid, Barcelona y Bilbao en marzo de 2024",
        img: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2017/11/16/581836.jpg",
        text: "La banda británica Depeche Mode actuará en marzo de 2024 en Madrid, Barcelona y Bilbao dentro de un nuevo tramo europeo del tour Memento Mori, ha informado este lunes la promotora Live Nation en un comunicado. Depeche Mode actuarán el 12 y 14 de marzo en el Wizink Center de Madrid, el 16 de marzo en el Palau Sant Jordi de Barcelona y el 21 de marzo en el BEC de Bilbao, y supone su regreso a España tras sus actuaciones en el Primavera Sound de Barcelona y Madrid este año.",
        date: new Date("07/10/2023")
        
      },
      {
        title: "Djokovic pasa a cuartos de Wimbledon tras un sufrido partido ante Hurzack en dos días",
        img: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2023/07/10/wimbledon-championship-46233530.jpeg",
        text: "El tenista serbio Novak Djokovic ganó su partido contra Hubert Hurkacz en cuatro mangas por (7-6/7-6/5-7/6-4), un encuentro que se celebró durante dos días, en la reanudación del partido este lunes, el tenista polaco fue capaz de ganarle un set al tenista serbio, siendo el único tenista hasta el momento que lo ha conseguido. Su próximo rival en Wimbledon será Rublev, se han enfrentado en cuatro ocasiones y la única vez que le ganó el tenista ruso fue en la final de Belgrado en 2022. El segundo favorito en Wimbledon sufrió mucho para derrotar a Hurkacz, un especialista consumado en la hierba que fue semifinalista en 2021.",
        date: new Date("02/21/2022")
        
      }
    ]
  }

     cargarNoticias(){
      console.log(this.noticias)
    }
    
    getNoticia($event: Noticia){
      this.noticias.push($event);
    }
}
