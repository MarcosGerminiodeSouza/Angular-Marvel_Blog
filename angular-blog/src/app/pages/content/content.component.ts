import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/fccc6398-0f8f-11ed-aa6e-9587410378a2/tony-stark-snap.jpg"
  contentTitle:string = "MINHAS ULTIMAS PALAVRAS?"
  contentDescription:string = "EU SOU O HOMEM DE FERRO!!!"
  private id:string  | null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.photoCover = result.photoCover
    this.contentTitle = result.title
    this.contentDescription = result.description


  }

}
