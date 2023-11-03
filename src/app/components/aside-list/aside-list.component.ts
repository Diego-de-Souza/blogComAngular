import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.css']
})
export class AsideListComponent implements OnInit {
  enterArticle:string="default";
  inlineNewsLast='4px solid red';
  inlinePopular='none';
  inlineHottopic='none';

  constructor() { }

  ngOnInit(): void {
  }
  openArticle(article:string){
    if(article == "first"){
      this.enterArticle = "default";
      this.inlineNewsLast='4px solid red';
      this.inlinePopular='none';
      this.inlineHottopic='none';
    }else if(article == "second"){
      this.enterArticle = "popular";
      this.inlineNewsLast='none';
      this.inlinePopular='4px solid red';
      this.inlineHottopic='none';
    }else {
      this.enterArticle = "hottopic";
      this.inlineNewsLast='none';
      this.inlinePopular='none';
      this.inlineHottopic='4px solid red';
    }
    return console.log(this.enterArticle);
  }
}
