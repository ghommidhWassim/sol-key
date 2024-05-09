import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {rythme} from "../configs/params";
import {Howl} from "howler";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pdfSrc = "";
  pdfview: boolean= false
  sound: Howl | undefined

  constructor( private  router: Router) {}
  navigteToMain(){
    if(this.pdfSrc){
      this.router.navigate(['/tabs/tab3']);
      this.pdfSrc=""
    }else {
      this.router.navigate(['/']);
      this.pdfSrc=""
    }

  }
  openfile(file:string){
    this.pdfSrc= file
  }
  async play(audioFile:string) {
    this.sound?.stop()
    this.sound = new Howl({
      src: [audioFile],
      html5: true,

    });
    this.sound.play();
  }

  stop(){
    this.sound?.stop()
  }
  protected readonly rythme = rythme;

}
