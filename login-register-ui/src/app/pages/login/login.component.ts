import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private User: UserService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  loginUser() {
    this.User.login(this.loginForm.value).subscribe(
      (data: any) => {
        let token = data.token;
        localStorage.setItem('Token', token);
        this.router.navigate([ '/' ]);
      }
    );
  }

  ngOnInit() {}

}
