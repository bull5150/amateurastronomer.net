import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blog } from 'src/app/models/blog_models';
import { BlogService } from 'src/app/services/blog.service';
import { Title, Meta } from '@angular/platform-browser';

declare let ga: Function;

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

  constructor(
    private route: ActivatedRoute 
    ,private blogService: BlogService
    ,private titleService: Title
    ,private metaService: Meta
  ) { 
    ga('set', 'page', 'blogread/' + this.route.snapshot.paramMap.get('blogid'));
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.blogID = this.route.snapshot.paramMap.get('blogid');
    this.blogService.getBlog(this.blogID).subscribe(response =>{
      this.blog = response;
      this.titleService.setTitle(this.blog.blogTitle);
      this.metaService.updateTag({name: 'description', content: this.blog.blogDescription});
      //this.metaService.updateTag({name: 'keywords', content: ''});
      this.metaService.updateTag({property: 'og:image', content: this.blog.imageURL});
    });
  }
}
