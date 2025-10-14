import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(
    private erf: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // this.renderer.addClass(this.erf.nativeElement, 'btn-lg');
  }
  // isActive = true;
  // @HostListener('click')
  // mouseClick(event: Event) {
  //   if (this.isActive) {
  //     this.renderer.addClass(this.erf.nativeElement, 'open');
  //     this.isActive = false;
  //   } else {
  //     this.renderer.removeClass(this.erf.nativeElement, 'open');
  //     this.isActive = true;
  //   }
  // }

  @HostBinding('class.open') isActive = false;
  @HostListener('click')
  mouseClick(event: Event) {
    this.isActive = !this.isActive;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as Node; // <-- type assertion
    if (!this.erf.nativeElement.contains(target)) {
      this.isActive = false;
    }
  }
}
