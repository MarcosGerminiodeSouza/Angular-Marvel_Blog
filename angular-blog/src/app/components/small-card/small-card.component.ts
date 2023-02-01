import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"

  @Input()
  cardTitle:string = "DEIXEI AQUI O SEU POST: CRIE UM SMALL-CARD "

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
