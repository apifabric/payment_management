import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMaterialHomeComponent } from './home/ProjectMaterial-home.component';
import { ProjectMaterialNewComponent } from './new/ProjectMaterial-new.component';
import { ProjectMaterialDetailComponent } from './detail/ProjectMaterial-detail.component';

const routes: Routes = [
  {path: '', component: ProjectMaterialHomeComponent},
  { path: 'new', component: ProjectMaterialNewComponent },
  { path: ':id', component: ProjectMaterialDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProjectMaterial-detail-permissions'
      }
    }
  }
];

export const PROJECTMATERIAL_MODULE_DECLARATIONS = [
    ProjectMaterialHomeComponent,
    ProjectMaterialNewComponent,
    ProjectMaterialDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectMaterialRoutingModule { }