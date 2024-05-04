import {Component, Input, OnInit} from '@angular/core';
import {tubu} from "../configs/params";
import {HttpClient} from "@angular/common/http";
import { FileOpener } from '@capawesome-team/capacitor-file-opener';

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

  constructor(private httpc: HttpClient, ) {
  }
  ngOnInit() {
    this.generateItems();
    console.log('tubu', tubu)
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  openfile(){
    this.pdfview= true
    /*try {
      const open = async () => {
        try {
          await FileOpener.openFile({
            path: '../../assets/files/testPdf.pdf',
          });
        }
        catch(e){
          console.log(e)
        }
      };

    }catch (e){
      console.log(e)}*/
  }
}
