import { Component, OnInit } from '@angular/core';
import { blog } from 'src/app/models/blog_models';
import { BlogService } from 'src/app/services/blog.service';
import { AdminService } from 'src/app/services/admin.service';
import { creds } from 'src/app/models/admin_models';

declare let ga: Function;

@Component({
  selector: 'blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit {

  public admin: boolean = false;
  public username: string;
  public password: string;
  public adminCreds: creds;
  public blogModel: blog = {
    Id: null,
    createDate: null,
    imageURL: null,
    blogTitle: null,
    blogDescription: null,
    blogEntry: ""
  } 

  constructor(private blogService: BlogService, private adminService: AdminService) {
    ga('set', 'page', 'blogpost');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.adminService.getAdminCreds().subscribe(response =>{
      this.adminCreds = response;
    });

  }

  newBlog(): void {
    this.blogModel = {
      Id: null,
      createDate: null,
      imageURL: null,
      blogTitle: null,
      blogDescription: null,
      blogEntry: ""
    } 
  }

  onSubmit(): void {
    this.blogService.postBlog(this.blogModel).subscribe(response =>{
      this.blogModel = response;
    });
  }
  login():void {
    if (this.username == this.adminCreds.username && this.password == this.adminCreds.password)
    {
      this.admin = true;
    }
  }
}
