import { Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-cast-cards',
  templateUrl: './cast-cards.component.html',
  styleUrls: ['./cast-cards.component.css','./cast-cards.responsive.component.css']
})
export class CastCardsComponent implements OnInit {
  @Input()
  photoCard:string='';
  @Input()
  castSorcerers:string='';
  @Input()
  textCard:string='';
  @Input()
  Id:string='';


  constructor(
    
  ) {   }

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
