import { Observable } from 'rxjs';
import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[LikeButton]'
})
export class LikeButtonDirective  {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setIcon();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setText();
  }

  setIcon() {
    this.el.nativeElement.innerHTML = "<img class='like-img' src='/assets/images/like.png'>";
    this.el.nativeElement.classList.remove('btn-primary');
    this.el.nativeElement.classList.add('btn-like');
  }

  setText() {
    this.el.nativeElement.innerHTML = "Me Gusta!!!";
    this.el.nativeElement.classList.remove('btn-like');
    this.el.nativeElement.classList.add('btn-primary');
  }
}

