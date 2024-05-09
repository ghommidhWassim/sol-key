import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {tubu} from "../configs/params";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pdfSrc = "";
  pdfview: boolean= false

  constructor( private  router: Router) {}
  navigteToMain(){
    if(this.pdfSrc){
      this.router.navigate(['/tabs/tab1']);
      this.pdfSrc=""
    }else {
      this.router.navigate(['/']);
      this.pdfSrc=""
    }

  }
  openfile(file:string){
    this.pdfSrc= file
  }
  protected readonly tubu = tubu;
}
