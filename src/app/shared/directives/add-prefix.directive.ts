import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddPrefix]'
})
export class AddPrefixDirective implements OnInit {
  @Input() prefixIndex: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const prefixEl = this.renderer.createElement('span');
    const prefixText = this.renderer.createText(this.getAnswerLetter() + '. ');
    this.renderer.appendChild(prefixEl, prefixText)
    this.renderer.insertBefore(
      this.el.nativeElement,
      prefixEl,
      this.el.nativeElement.firstChild
    );
  }

  getAnswerLetter() {
    return String.fromCharCode(65 + this.prefixIndex);
  }
}
