import { FormStyle,
  getLocaleDateFormat,
  TranslationWidth,
  FormatWidth } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css','./menu-header.responsive.component.css']
})
export class MenuHeaderComponent implements OnInit {

  formatoData:string = getLocaleDateFormat(this.locale,FormatWidth.Short);
  dia = new Date().getDay();
  hora = new Date().getHours();
  minuto = new Date().getMinutes();

  constructor(@Inject(LOCALE_ID) public locale: string,) { }

  ngOnInit(): void {
  }

  dataBlog(){
    let diaSemana:string="";
    if(this.dia==0){
      diaSemana = "Domingo";
    }else if(this.dia == 1){
      diaSemana = "Segunda";
    }else if(this.dia == 2){
      diaSemana = "Terça";
    }else if(this.dia == 3){
      diaSemana = "Quarta";
    }else if(this.dia == 4){
      diaSemana = "Quinta";
    }else if(this.dia == 5){
      diaSemana = "Sexta";
    }else {
      diaSemana = "Sábado";
    }
    return `${diaSemana} - ${this.hora}:${this.minuto}`;
  }

}
