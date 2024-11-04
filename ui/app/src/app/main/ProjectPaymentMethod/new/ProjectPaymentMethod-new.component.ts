import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ProjectPaymentMethod-new',
  templateUrl: './ProjectPaymentMethod-new.component.html',
  styleUrls: ['./ProjectPaymentMethod-new.component.scss']
})
export class ProjectPaymentMethodNewComponent {
  @ViewChild("ProjectPaymentMethodForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}