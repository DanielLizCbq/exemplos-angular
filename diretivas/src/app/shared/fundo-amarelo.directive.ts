import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) {
    //this._elementRef.nativeElement.style.backgroundColor = 'blue';
    //this._elementRef.nativeElement.style.color = 'yellow';
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'blue'
    );
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'color',
      'yellow'
    );
  }

}
