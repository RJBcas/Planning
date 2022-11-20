import {
  Component, OnInit
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: UntypedFormGroup;
  constructor(public fb: UntypedFormBuilder,
    public rout: Router,) {
    this.loginForm = this.fb.group({

      userName: ['', { validators: [Validators.required, Validators.email] }],
      password: ['', Validators.compose([
        Validators.required,
        // Validators.minLength(8),
        // Validators.maxLength(16),
        // Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      ])]

    })

  }

  ngOnInit(): void {

  }

  login() {
    console.log('hola')
    this.rout.navigate(['dashboard'])
  }
}


