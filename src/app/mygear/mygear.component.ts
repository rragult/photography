import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mygear',
  templateUrl: './mygear.component.html',
  styleUrls: ['./mygear.component.css']
})
export class MygearComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
