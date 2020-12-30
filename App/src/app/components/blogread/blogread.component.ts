import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blogread',
  templateUrl: './blogread.component.html',
  styleUrls: ['./blogread.component.scss']
})
export class BlogreadComponent implements OnInit {

  blogID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogID = this.route.snapshot.paramMap.get('blogid');
  }

}
