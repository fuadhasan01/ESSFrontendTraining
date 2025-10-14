import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'black'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'black'
    // );
    this.backgroundColor = 'yellow';
  }
}
