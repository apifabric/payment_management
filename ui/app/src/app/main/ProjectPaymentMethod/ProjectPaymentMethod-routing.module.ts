import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPaymentMethodHomeComponent } from './home/ProjectPaymentMethod-home.component';
import { ProjectPaymentMethodNewComponent } from './new/ProjectPaymentMethod-new.component';
import { ProjectPaymentMethodDetailComponent } from './detail/ProjectPaymentMethod-detail.component';

const routes: Routes = [
  {path: '', component: ProjectPaymentMethodHomeComponent},
  { path: 'new', component: ProjectPaymentMethodNewComponent },
  { path: ':id', component: ProjectPaymentMethodDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProjectPaymentMethod-detail-permissions'
      }
    }
  }
];

export const PROJECTPAYMENTMETHOD_MODULE_DECLARATIONS = [
    ProjectPaymentMethodHomeComponent,
    ProjectPaymentMethodNewComponent,
    ProjectPaymentMethodDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPaymentMethodRoutingModule { }