import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirectiveDirective  implements OnInit{
  
  @Input('Highlight')
  price: number = 0;
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if(this.price > 300)
     this.element.nativeElement.style.backgroundColor = "Yellow"
     console.log(this.price);
  }
}
