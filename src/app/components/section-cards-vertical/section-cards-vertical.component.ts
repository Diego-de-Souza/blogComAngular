import { Component, OnInit, Input } from '@angular/core';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-section-cards-vertical',
  templateUrl: './section-cards-vertical.component.html',
  styleUrls: ['./section-cards-vertical.component.css','./section-cards-vertical.responsive.component.css']
})
export class SectionCardsVerticalComponent implements OnInit {
  @Input()
  photoCard:string='';
  @Input()
  castSorcerers:string='';
  @Input()
  textCard:string='';
  @Input()
  Id:string='';

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(Id:string | null){
    const result = dataFake.filter(
                      article => article.id == this.Id)[0]

    this.photoCard = result.photoCard;
    this.castSorcerers = result.castSorcerers;
    this.textCard = result.textCard;
  }

}
