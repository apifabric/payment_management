import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROJECTEMPLOYEE_MODULE_DECLARATIONS, ProjectEmployeeRoutingModule} from  './ProjectEmployee-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProjectEmployeeRoutingModule
  ],
  declarations: PROJECTEMPLOYEE_MODULE_DECLARATIONS,
  exports: PROJECTEMPLOYEE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectEmployeeModule { }