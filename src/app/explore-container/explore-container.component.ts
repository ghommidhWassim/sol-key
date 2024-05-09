import {Component, Input, OnInit} from '@angular/core';
import {tubu} from "../configs/params";

import { Platform } from '@ionic/angular';

import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit{
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  pdfview: boolean= false
  @Input() name?: string;
  items:any = [];
  tubu= tubu
  sound: Howl | undefined
  constructor(private platform: Platform) {
  }
  ngOnInit() {
    console.log(this.platform)
    this.generateItems();
    console.log('tubu', tubu)
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  async play() {
    this.sound = new Howl({
      src: ['assets/files/audio1.mp3'],
      html5: true
    });
    this.sound.play();
  }


  openfile(){
    this.pdfview= true

  }
}
