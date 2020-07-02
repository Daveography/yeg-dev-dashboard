import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { MapComponent } from '../map.component';

@Injectable()
export class ReusableMapService {

  private componentRef: ComponentRef<MapComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector
  ) {
    this.componentRef = this.createComponent(componentFactoryResolver, injector);
  }

  private createComponent(componentFactoryResolver: ComponentFactoryResolver, injector: Injector): ComponentRef<MapComponent> {
    const componentFactory = componentFactoryResolver.resolveComponentFactory(MapComponent);
    return componentFactory.create(injector);
  }

  public attach(viewContainerRef: ViewContainerRef) {
    viewContainerRef.insert(this.componentRef.hostView);
  }

  public detach(viewContainerRef: ViewContainerRef) {
    viewContainerRef.detach(viewContainerRef.indexOf(this.componentRef.hostView));
  }

  public setMarker(latitude: number, longitude: number) {
    const mapComponent = this.componentRef.instance;

    // Wait for map to load
    mapComponent.MapReady.subscribe(ready => {
      if (ready) {
        mapComponent.setMarker(latitude, longitude);
      }
    });
  }
}
