import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[TextBolder]'
})
export class BoldDirectiveDirective implements OnInit {

  @Input('TextBolder')
  text: string = ""
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = "Bold"
  }
}
