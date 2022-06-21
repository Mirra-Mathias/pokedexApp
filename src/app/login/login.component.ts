import { MatSnackBar } from '@angular/material/snack-bar';
import { RoutesService } from './../routes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routeService: RoutesService, private snack: MatSnackBar) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });

  ngOnInit(): void {
  }

  get usernameInput() { return this.loginForm.get('username')}
  get passwordInput() { return this.loginForm.get('password')}

  login() {
    this.routeService.login(this.usernameInput?.value, this.passwordInput?.value)
    .then((result: any) => {
      this.snack.open('Connexion réussite !', 'OK' , {
        duration: 3000
      })
    })
  }

}
