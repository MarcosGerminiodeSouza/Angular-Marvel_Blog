import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"
  @Input()
  cardTitle:string = "DÊ UM TITULO AO SEU BIG-CARD"
  @Input()
  cardDescription:string = "Dê uma descrição ao seu BIG-CARD"
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
