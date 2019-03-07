import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-sso-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup
    error: boolean = false
    submitted: boolean = false

    constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {
      this.form = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    ngOnInit() {

    }

    onSubmit() {
      this.submitted = true
      let response = this.auth.login(this.form.controls.username.value, this.form.controls.password.value)

      if (response) {
        this.router.navigate(['**'])
      } else {
        this.error = true
      }

    }
}