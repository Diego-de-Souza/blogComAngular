import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {
  imageIcone:string='../../../assets/imagens/menu_resp_fechado_32x32.png';
  menuFlutuante = '';
  checkBtn:Boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  abre_fecha_Menu(){
    if(this.checkBtn == false){
      this.imageIcone='../../../assets/imagens/menu_resp_aberto_32x32.png';
      this.checkBtn=true;
      this.menuFlutuante='flex';
      console.log('está clicando')
    }else {
      this.imageIcone='../../../assets/imagens/menu_resp_fechado_32x32.png';
      this.checkBtn=false;
      this.menuFlutuante='none';
    }
  }

}
