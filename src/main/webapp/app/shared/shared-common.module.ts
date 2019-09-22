import { NgModule } from '@angular/core';

import { MsstudygatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MsstudygatewaySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MsstudygatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MsstudygatewaySharedCommonModule {}
