import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProjectEmployee-card.component.html',
  styleUrls: ['./ProjectEmployee-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProjectEmployee-card]': 'true'
  }
})

export class ProjectEmployeeCardComponent {


}