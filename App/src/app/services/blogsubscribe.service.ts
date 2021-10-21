import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { blogSubscribe } from '../models/blog_models';

@Injectable({
  providedIn: 'root'
})
export class BlogsubscribeService {

  constructor(private http: HttpClient) { }

  public postSub(blogSub: blogSubscribe)
  {
    return this.http.post<blogSubscribe>('api/BlogSubscribe', blogSub);
  }
}
