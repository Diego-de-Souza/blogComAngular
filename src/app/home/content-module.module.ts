import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ContentComponent}from '../pages/content/content.component';
import {HomeModule} from '../home/home.module';
import {CastCardsComponent} from '../components/cast-cards/cast-cards.component';

@NgModule({
    declarations: [
        ContentComponent,
        CastCardsComponent,
    ],
    exports: [
        ContentComponent,
        CastCardsComponent,
    ],
    imports: [
        CommonModule,
        HomeModule
    ]
})
export class ContentModuleModule { }
