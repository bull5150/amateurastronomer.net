import { Component, OnInit } from '@angular/core';

declare let ga: Function;

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor() { 
    ga('set', 'page', 'resources');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
  }

}
