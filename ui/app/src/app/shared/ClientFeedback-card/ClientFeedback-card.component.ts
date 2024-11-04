import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ClientFeedback-card.component.html',
  styleUrls: ['./ClientFeedback-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ClientFeedback-card]': 'true'
  }
})

export class ClientFeedbackCardComponent {


}