import { Directive, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { ReusableMapService } from './reusable-map.service';

@Directive({
  selector: '[appReusableMap]',
})
export class ReusableMapDirective implements OnInit, OnDestroy {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private reusableService: ReusableMapService
  ) {
    console.log('ReusableMapDirective constructor called');
  }

  ngOnInit(): void {
    console.log('ReusableMapDirective initializing');
    this.reusableService.attach(this.viewContainerRef);
  }

  ngOnDestroy(): void {
    console.log('ReusableMapDirective being destroyed');
    this.reusableService.detach(this.viewContainerRef);
  }

}
