import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProjectMaterial-card.component.html',
  styleUrls: ['./ProjectMaterial-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProjectMaterial-card]': 'true'
  }
})

export class ProjectMaterialCardComponent {


}