import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MsstudygatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MsstudygatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MsstudygatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsstudygatewaySharedModule {
  static forRoot() {
    return {
      ngModule: MsstudygatewaySharedModule
    };
  }
}
