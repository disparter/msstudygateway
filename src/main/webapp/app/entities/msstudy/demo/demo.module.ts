import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MsstudygatewaySharedModule } from 'app/shared';
import {
  DemoComponent,
  DemoDetailComponent,
  DemoUpdateComponent,
  DemoDeletePopupComponent,
  DemoDeleteDialogComponent,
  demoRoute,
  demoPopupRoute
} from './';

const ENTITY_STATES = [...demoRoute, ...demoPopupRoute];

@NgModule({
  imports: [MsstudygatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [DemoComponent, DemoDetailComponent, DemoUpdateComponent, DemoDeleteDialogComponent, DemoDeletePopupComponent],
  entryComponents: [DemoComponent, DemoUpdateComponent, DemoDeleteDialogComponent, DemoDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MsstudyDemoModule {}
