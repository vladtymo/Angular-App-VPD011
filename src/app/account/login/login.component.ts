import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { ILoginModel } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = this.fb.group({
    email: ['example@ukr.net', Validators.required],
    password: ['Qwer-1234', Validators.required]
  });
  
  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    
    if (this.loginForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const user: ILoginModel = this.loginForm.value;

    this.accountService.login(user).subscribe(result => {
      console.log(result);

      this.accountService.saveToken(result.token);

      this.router.navigateByUrl('/');
    }, error => {
      console.error(error);
      if (error?.error?.ErrorMessage)
        alert(error.error.ErrorMessage);
      else
        alert(error.message);
    });
  }

}
