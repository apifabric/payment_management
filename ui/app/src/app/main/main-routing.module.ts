import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Client', loadChildren: () => import('./Client/Client.module').then(m => m.ClientModule) },
    
        { path: 'ClientFeedback', loadChildren: () => import('./ClientFeedback/ClientFeedback.module').then(m => m.ClientFeedbackModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Invoice', loadChildren: () => import('./Invoice/Invoice.module').then(m => m.InvoiceModule) },
    
        { path: 'Material', loadChildren: () => import('./Material/Material.module').then(m => m.MaterialModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'PaymentMethod', loadChildren: () => import('./PaymentMethod/PaymentMethod.module').then(m => m.PaymentMethodModule) },
    
        { path: 'Project', loadChildren: () => import('./Project/Project.module').then(m => m.ProjectModule) },
    
        { path: 'ProjectEmployee', loadChildren: () => import('./ProjectEmployee/ProjectEmployee.module').then(m => m.ProjectEmployeeModule) },
    
        { path: 'ProjectMaterial', loadChildren: () => import('./ProjectMaterial/ProjectMaterial.module').then(m => m.ProjectMaterialModule) },
    
        { path: 'ProjectPaymentMethod', loadChildren: () => import('./ProjectPaymentMethod/ProjectPaymentMethod.module').then(m => m.ProjectPaymentMethodModule) },
    
        { path: 'Task', loadChildren: () => import('./Task/Task.module').then(m => m.TaskModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }