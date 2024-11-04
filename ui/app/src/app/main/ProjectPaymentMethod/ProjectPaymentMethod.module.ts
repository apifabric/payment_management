import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROJECTPAYMENTMETHOD_MODULE_DECLARATIONS, ProjectPaymentMethodRoutingModule} from  './ProjectPaymentMethod-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProjectPaymentMethodRoutingModule
  ],
  declarations: PROJECTPAYMENTMETHOD_MODULE_DECLARATIONS,
  exports: PROJECTPAYMENTMETHOD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectPaymentMethodModule { }