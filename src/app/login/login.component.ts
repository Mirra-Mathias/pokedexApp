import { MatSnackBar } from '@angular/material/snack-bar';
import { RoutesService } from './../routes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routeService: RoutesService, private snack: MatSnackBar, private globalSrv: GlobalService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });

  ngOnInit(): void {
  }

  get usernameInput() { return this.loginForm.get('username')}
  get passwordInput() { return this.loginForm.get('password')}

  login() {
    console.log(this.usernameInput?.value);
    console.log(this.passwordInput?.value);
    
    this.routeService.login(this.usernameInput?.value, this.passwordInput?.value)
    .then((result: any) => {      
      this.globalSrv.theItem = result.user;

      this.snack.open('Connexion réussite !', 'OK' , {
        duration: 3000
      })
    }).then(() => {
      this.router.navigateByUrl('/compte')
    })
  }

}
