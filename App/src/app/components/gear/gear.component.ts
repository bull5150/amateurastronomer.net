import { Component, OnInit } from '@angular/core';

declare let ga: Function;

@Component({
  selector: 'gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  constructor() { 
    ga('set', 'page', 'mygear');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
  }

}
