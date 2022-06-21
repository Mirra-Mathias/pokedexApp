import { RoutesService } from './../routes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });

  hide = true;

  constructor(private routeService: RoutesService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  get usernameInput() { return this.registerForm.get('username')}
  get passwordInput() { return this.registerForm.get('password')}  

  register() {
    this.routeService.register(this.usernameInput?.value, this.passwordInput?.value)
    .then((result: any) => {
      this.snack.open('Nouveau compte créé !', 'OK' , {
        duration: 3000
      })
    })
  }
}
