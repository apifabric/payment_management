import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectHomeComponent } from './home/Project-home.component';
import { ProjectNewComponent } from './new/Project-new.component';
import { ProjectDetailComponent } from './detail/Project-detail.component';

const routes: Routes = [
  {path: '', component: ProjectHomeComponent},
  { path: 'new', component: ProjectNewComponent },
  { path: ':id', component: ProjectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Project-detail-permissions'
      }
    }
  },{
    path: ':project_id/ClientFeedback', loadChildren: () => import('../ClientFeedback/ClientFeedback.module').then(m => m.ClientFeedbackModule),
    data: {
        oPermission: {
            permissionId: 'ClientFeedback-detail-permissions'
        }
    }
},{
    path: ':project_id/Invoice', loadChildren: () => import('../Invoice/Invoice.module').then(m => m.InvoiceModule),
    data: {
        oPermission: {
            permissionId: 'Invoice-detail-permissions'
        }
    }
},{
    path: ':project_id/Payment', loadChildren: () => import('../Payment/Payment.module').then(m => m.PaymentModule),
    data: {
        oPermission: {
            permissionId: 'Payment-detail-permissions'
        }
    }
},{
    path: ':project_id/ProjectEmployee', loadChildren: () => import('../ProjectEmployee/ProjectEmployee.module').then(m => m.ProjectEmployeeModule),
    data: {
        oPermission: {
            permissionId: 'ProjectEmployee-detail-permissions'
        }
    }
},{
    path: ':project_id/ProjectMaterial', loadChildren: () => import('../ProjectMaterial/ProjectMaterial.module').then(m => m.ProjectMaterialModule),
    data: {
        oPermission: {
            permissionId: 'ProjectMaterial-detail-permissions'
        }
    }
},{
    path: ':project_id/ProjectPaymentMethod', loadChildren: () => import('../ProjectPaymentMethod/ProjectPaymentMethod.module').then(m => m.ProjectPaymentMethodModule),
    data: {
        oPermission: {
            permissionId: 'ProjectPaymentMethod-detail-permissions'
        }
    }
},{
    path: ':project_id/Task', loadChildren: () => import('../Task/Task.module').then(m => m.TaskModule),
    data: {
        oPermission: {
            permissionId: 'Task-detail-permissions'
        }
    }
}
];

export const PROJECT_MODULE_DECLARATIONS = [
    ProjectHomeComponent,
    ProjectNewComponent,
    ProjectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }