import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blog } from 'src/app/models/blog_models';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'blogread',
  templateUrl: './blogread.component.html',
  styleUrls: ['./blogread.component.scss']
})
export class BlogreadComponent implements OnInit {

  public blogID: string;
  public blog: blog = {
    Id: null,
    createDate: null,
    imageURL: null,
    blogTitle: null,
    blogDescription: null,
    blogEntry: null
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService,) { }

  ngOnInit(): void {
    this.blogID = this.route.snapshot.paramMap.get('blogid');
    this.blogService.getBlog(this.blogID).subscribe(response =>{
      this.blog = response;
    });
  }

}
