import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  model: any = {};
  public loading: boolean = false;
  public error = '';

  constructor(private authenticationService: AuthenticationService, private router : Router) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      result => {
        if(result === true) {
          this.router.navigate(['/wallComponent']);
        } else {
          this.loading = false;
          this.error = "Usuario o contraseña incorrectos."
        }
      });
  }

}
