import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
  contentTitle:string = "TÍTULO DINÂMICO"
  contentDescription:string = "Descrição dinâmica. ao escolher um de nossos cards ele aparecerá aqui"
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
