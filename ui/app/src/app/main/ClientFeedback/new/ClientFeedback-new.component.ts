import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ClientFeedback-new',
  templateUrl: './ClientFeedback-new.component.html',
  styleUrls: ['./ClientFeedback-new.component.scss']
})
export class ClientFeedbackNewComponent {
  @ViewChild("ClientFeedbackForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}