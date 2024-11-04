import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CLIENTFEEDBACK_MODULE_DECLARATIONS, ClientFeedbackRoutingModule} from  './ClientFeedback-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ClientFeedbackRoutingModule
  ],
  declarations: CLIENTFEEDBACK_MODULE_DECLARATIONS,
  exports: CLIENTFEEDBACK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientFeedbackModule { }