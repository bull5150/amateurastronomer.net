import { Component, OnInit } from '@angular/core';

declare let ga: Function;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { 
    ga('set', 'page', 'gallery');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
  }

}
