import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ProjectEmployee-new',
  templateUrl: './ProjectEmployee-new.component.html',
  styleUrls: ['./ProjectEmployee-new.component.scss']
})
export class ProjectEmployeeNewComponent {
  @ViewChild("ProjectEmployeeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}