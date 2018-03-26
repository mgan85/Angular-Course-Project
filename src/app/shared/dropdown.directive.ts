import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 //  open = false;
 //  @HostListener('click') onClick() {
 //   this.open= ! this.open;
 //   if(this.open)
 //    this.renderer.addClass(this.elementRef.nativeElement, 'open');
 //   else
 //     this.renderer.removeClass(this.elementRef.nativeElement, 'open');
 // };
 //  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
