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
  cardTitle:string = "ESSE TÍTULO É DINÂMICO"
  @Input()
  cardDescription:string = "Descrição dinâmica. Fale mais sobre este card..."
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
