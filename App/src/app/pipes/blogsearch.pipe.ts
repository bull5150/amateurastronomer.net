import { Pipe, PipeTransform } from '@angular/core';
import { blog } from '../models/blog_models';

@Pipe({
  name: 'blogsearch'
})
export class BlogsearchPipe implements PipeTransform {

  transform(blogData: blog[], searchText ) {
    if(searchText){
      searchText = searchText.toLowerCase();
      return blogData.filter(
        blogData =>
        blogData.blogDescription.toLowerCase().indexOf(searchText) > -1 ||
        blogData.blogEntry.toLowerCase().indexOf(searchText) > -1 ||
        blogData.blogTitle.toLowerCase().indexOf(searchText) > -1 ||
        blogData.createDate.toLowerCase().indexOf(searchText) > -1
      )
    }
    else {
      return blogData;
    }
  }

}
