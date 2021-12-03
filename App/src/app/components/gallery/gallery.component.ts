import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { onstipe } from 'src/app/models/onstipe_models';
import { OnstipeService } from 'src/app/services/onstipe.service';

declare let ga: Function;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  public stipe: onstipe;
  public cards: string[];
  
  constructor(private stipeService: OnstipeService, private renderer: Renderer2) { 
    ga('set', 'page', 'gallery');
    ga('send', 'pageview');
  }

  slides: any = [[]];

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.stipeService.getStipe().subscribe(response =>{
      this.stipe = response;
      this.slides = this.chunk(this.stipe.posts, 3);
    });
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }

}
