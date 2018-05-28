import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color',
      'blue'
    )*/
    this.backgrnd = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color',
      'white'
    )*/
    this.backgrnd = this.defaultColor;
  }

  //@HostBinding('style.backgroundColor') backgrnd: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgrnd;
  } ;
  
  private backgrnd: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'blue';

  constructor() { }

  ngOnInit(){
    this.backgrnd = this.defaultColor;
  }

}
