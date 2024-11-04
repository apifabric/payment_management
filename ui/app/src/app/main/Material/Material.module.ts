import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MATERIAL_MODULE_DECLARATIONS, MaterialRoutingModule} from  './Material-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MaterialRoutingModule
  ],
  declarations: MATERIAL_MODULE_DECLARATIONS,
  exports: MATERIAL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }