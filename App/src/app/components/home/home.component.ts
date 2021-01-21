import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { blog } from 'src/app/models/blog_models';

declare let ga: Function;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogList: blog[];
  public loaded: boolean;
  config: any;

  constructor(private blogService:BlogService,) { 
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: 1
    };
    ga('set', 'page', 'home');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.loaded = false;
    this.blogService.getBlogList().subscribe(response =>{
      this.blogList = response;
      this.blogList.reverse();
      this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.blogList.length
      };
      this.loaded = true;
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
