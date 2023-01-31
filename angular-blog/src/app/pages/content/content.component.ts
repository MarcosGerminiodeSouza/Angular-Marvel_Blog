import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/fccc6398-0f8f-11ed-aa6e-9587410378a2/tony-stark-snap.jpg"
  contentTitle:string = "MINHAS ULTIMAS PALAVRAS"
  contentDescription:string = "EU SOU O HOMEM DE FERRO!!!"
  constructor() { }

  ngOnInit(): void {
  }

}
