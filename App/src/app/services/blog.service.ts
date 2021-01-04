import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { blog } from '../models/blog_models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getBlog(id: string)
  {
    return this.http.get<blog>('api/blog/' + id);
  }

  public getBlogList()
  {
    return this.http.get<blog[]>('api/blog');
  }

  public postBlog(blogEntry: blog)
  {
    return this.http.post<blog>('api/blog', blogEntry);
  }

}
