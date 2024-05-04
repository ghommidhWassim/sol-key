import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {HttpClientModule} from "@angular/common/http";
import {PdfViewerModule} from "ng2-pdf-viewer";



@NgModule({
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent,],
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule,PdfViewerModule],
})
export class ExploreContainerComponentModule {}
