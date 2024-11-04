import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Material-card.component.html',
  styleUrls: ['./Material-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Material-card]': 'true'
  }
})

export class MaterialCardComponent {


}