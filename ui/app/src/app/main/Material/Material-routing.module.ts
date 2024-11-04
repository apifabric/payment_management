import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialHomeComponent } from './home/Material-home.component';
import { MaterialNewComponent } from './new/Material-new.component';
import { MaterialDetailComponent } from './detail/Material-detail.component';

const routes: Routes = [
  {path: '', component: MaterialHomeComponent},
  { path: 'new', component: MaterialNewComponent },
  { path: ':id', component: MaterialDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Material-detail-permissions'
      }
    }
  },{
    path: ':material_id/ProjectMaterial', loadChildren: () => import('../ProjectMaterial/ProjectMaterial.module').then(m => m.ProjectMaterialModule),
    data: {
        oPermission: {
            permissionId: 'ProjectMaterial-detail-permissions'
        }
    }
}
];

export const MATERIAL_MODULE_DECLARATIONS = [
    MaterialHomeComponent,
    MaterialNewComponent,
    MaterialDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }