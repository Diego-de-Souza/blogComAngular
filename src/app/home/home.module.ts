import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from '../pages/home/home.component';
import {MenuHeaderComponent} from '../components/menu-header/menu-header.component';
import {MenuBarComponent} from '../components/menu-bar/menu-bar.component';
import { ArticleHotTopicComponent } from '../components/article-hot-topic/article-hot-topic.component';
import {ArticleAsideComponent} from '../components/article-aside/article-aside.component';
import {MenuNoticyComponent} from '../components/menu-noticy/menu-noticy.component';
import {MenuHistoryComponent} from '../components/menu-history/menu-history.component';
import {AsideTopicComponent} from '../components/aside-topic/aside-topic.component';
import {SectionImageComponent} from '../components/section-image/section-image.component';
import {AsideListComponent} from '../components/aside-list/aside-list.component';
import {SectionSloganComponent } from '../components/section-slogan/section-slogan.component';
import {SectionMerchandisingComponent} from '../components/section-merchandising/section-merchandising.component';
import { SectionCardsVerticalComponent} from '../components/section-cards-vertical/section-cards-vertical.component';
import{SectionFooterComponent} from '../components/section-footer/section-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuHeaderComponent,
    MenuBarComponent,
    ArticleHotTopicComponent,
    ArticleAsideComponent,
    MenuNoticyComponent,
    MenuHistoryComponent,
    AsideTopicComponent,
    SectionImageComponent,
    AsideListComponent,
    SectionSloganComponent,
    SectionMerchandisingComponent,
    SectionCardsVerticalComponent,
    SectionFooterComponent
  ],
  exports:[
    HomeComponent,
    MenuHeaderComponent,
    MenuBarComponent,
    ArticleHotTopicComponent,
    ArticleAsideComponent,
    MenuNoticyComponent,
    MenuHistoryComponent,
    AsideTopicComponent,
    SectionImageComponent,
    AsideListComponent,
    SectionSloganComponent,
    SectionMerchandisingComponent,
    SectionCardsVerticalComponent,
    SectionFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
