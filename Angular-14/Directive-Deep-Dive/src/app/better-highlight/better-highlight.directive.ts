import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'black'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'black'
    // );
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
}
