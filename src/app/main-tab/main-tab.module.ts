import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTabRoutingModule } from './main-tab-routing.module';
import {MainTabComponent} from "./main-tab/main-tab.component";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {IonicModule} from "@ionic/angular";


@NgModule({
  declarations: [MainTabComponent],
  imports: [
    CommonModule,
    MainTabRoutingModule,
    ExploreContainerComponentModule,
    IonicModule
  ]
})
export class MainTabModule { }
