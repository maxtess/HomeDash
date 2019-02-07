import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sso-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    control: FormControl;

    constructor(private fb: FormBuilder) {
      this.control = fb.control({value: 'my val', disabled: true});
    }

    ngOnInit() {

    }
}