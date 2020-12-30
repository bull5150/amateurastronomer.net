import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { blog } from 'src/app/models/blog_models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogList: blog[];
  config: any;

  constructor(private blogService:BlogService,) { 

  }

  ngOnInit(): void {
    this.blogService.getBlogList().subscribe(response =>{
      this.blogList = response;
      this.blogList.reverse();
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.blogList.length
      };
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
