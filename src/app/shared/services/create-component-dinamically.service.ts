import { Compiler, ComponentFactory, Injector, Type } from '@angular/core';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateComponentDinamicallyService {
  constructor(private _compiler: Compiler) {}

  createComponent(
    module: Type<unknown>,
    injector: Injector,
    component: any
  ): ComponentFactory<any> {
    const ngModuleFactory = this._compiler.compileModuleSync(module);

    const ngModule = ngModuleFactory.create(injector);

    return ngModule.componentFactoryResolver.resolveComponentFactory(component);
  }
}
