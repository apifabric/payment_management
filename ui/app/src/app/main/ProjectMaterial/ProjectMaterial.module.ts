import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PROJECTMATERIAL_MODULE_DECLARATIONS, ProjectMaterialRoutingModule} from  './ProjectMaterial-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProjectMaterialRoutingModule
  ],
  declarations: PROJECTMATERIAL_MODULE_DECLARATIONS,
  exports: PROJECTMATERIAL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectMaterialModule { }