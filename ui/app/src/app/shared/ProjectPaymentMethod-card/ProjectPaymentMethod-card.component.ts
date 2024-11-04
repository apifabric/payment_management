import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProjectPaymentMethod-card.component.html',
  styleUrls: ['./ProjectPaymentMethod-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProjectPaymentMethod-card]': 'true'
  }
})

export class ProjectPaymentMethodCardComponent {


}