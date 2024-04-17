import { Component, OnInit, AfterContentChecked, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentChecked {

  constructor(private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this._spinner.show();
  }

  ngAfterContentChecked(): void {
    this._spinner.hide();
  }

}
