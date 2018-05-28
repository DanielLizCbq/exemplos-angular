import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseEnter(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color',
      'blue'
    )*/
    this.backgrnd = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color',
      'white'
    )*/
    this.backgrnd = 'white';
  }

  //@HostBinding('style.backgroundColor') backgrnd: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgrnd;
  } ;
  
  private backgrnd: string;

  constructor() {

   }

}
