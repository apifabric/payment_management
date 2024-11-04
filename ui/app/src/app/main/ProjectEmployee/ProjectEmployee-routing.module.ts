import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectEmployeeHomeComponent } from './home/ProjectEmployee-home.component';
import { ProjectEmployeeNewComponent } from './new/ProjectEmployee-new.component';
import { ProjectEmployeeDetailComponent } from './detail/ProjectEmployee-detail.component';

const routes: Routes = [
  {path: '', component: ProjectEmployeeHomeComponent},
  { path: 'new', component: ProjectEmployeeNewComponent },
  { path: ':id', component: ProjectEmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProjectEmployee-detail-permissions'
      }
    }
  }
];

export const PROJECTEMPLOYEE_MODULE_DECLARATIONS = [
    ProjectEmployeeHomeComponent,
    ProjectEmployeeNewComponent,
    ProjectEmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEmployeeRoutingModule { }