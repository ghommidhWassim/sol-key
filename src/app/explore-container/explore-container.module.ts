import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule,],
})
export class ExploreContainerComponentModule {}
