import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFeedbackHomeComponent } from './home/ClientFeedback-home.component';
import { ClientFeedbackNewComponent } from './new/ClientFeedback-new.component';
import { ClientFeedbackDetailComponent } from './detail/ClientFeedback-detail.component';

const routes: Routes = [
  {path: '', component: ClientFeedbackHomeComponent},
  { path: 'new', component: ClientFeedbackNewComponent },
  { path: ':id', component: ClientFeedbackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ClientFeedback-detail-permissions'
      }
    }
  }
];

export const CLIENTFEEDBACK_MODULE_DECLARATIONS = [
    ClientFeedbackHomeComponent,
    ClientFeedbackNewComponent,
    ClientFeedbackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFeedbackRoutingModule { }