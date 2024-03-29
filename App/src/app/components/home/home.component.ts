import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { blog, blogSubscribe } from 'src/app/models/blog_models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogsubscribeService } from 'src/app/services/blogsubscribe.service';
import { ModalContainerComponent } from 'angular-bootstrap-md';
import { Meta, Title } from '@angular/platform-browser';

declare let ga: Function;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public blogList: blog[];
  public loaded: boolean;
  public subscribeForm: FormGroup;
  public submodel: blogSubscribe;
  public alert: boolean;
  public searchText: string;
  config: any;

  constructor(private blogService:BlogService, 
    private blogSubService: BlogsubscribeService, 
    private formBuilder: FormBuilder, 
    private metaService: Meta,
    private titleService: Title,
    public router: Router) { 
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
    this.searchText = "";
    this.createEmailForm();
    this.alert = false;
    this.titleService.setTitle('Amateur Astronomer');
    this.metaService.updateTag({name: 'description', content: 'A Blog from a Amateur on Astronomy, and Astrophotography.  Follow my struggles to hopifully learn from my mistakes.'});
    this.metaService.updateTag({property: 'og:image', content: 'https://lh3.googleusercontent.com/HsnI6FtKGuZRarKTdqoM-AQDa9SwgIF_pp-J5OFanaxnTN86k3IFNtcRHeZ2abTbsGLKEsCWjFdoPXSJ26d6AsdMA68kkeEm38hwVcEIKEjaxsQVNzpJKfyX98BXFTjmuJHaIeO3dkE'});
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

  createEmailForm(){
    this.subscribeForm = this.formBuilder.group({
      fname: "",
      lname: "",
      email: "",
    });
  }

  submit(){
    if(this.subscribeForm.value.email.indexOf("@") == -1 || this.subscribeForm.value.email.indexOf(".") == -1)
    {
      alert("Please enter a valid email address.");
      this.alert = true;
    }
    else
    {
        this.submodel = {
          Id: null,
          f_name: this.subscribeForm.value.fname,
          l_name: this.subscribeForm.value.lname,
          email: this.subscribeForm.value.email,
          age: null,
          phone: null,
          country: null,
          city: null,
          state: null,
        }
        this.blogSubService.postSub(this.submodel).subscribe(response =>{
          this.submodel = response;
          this.closeMe();
          alert("Thank you for subscribing!")
          this.alert = false;
        });
    }
  }
  dismissAlert()
  {
    this.alert = false;
  }
  @ViewChild('basicModal', { static: true }) basicModal: ModalContainerComponent;
  closeMe(){
    this.basicModal.hide();
  }
}
