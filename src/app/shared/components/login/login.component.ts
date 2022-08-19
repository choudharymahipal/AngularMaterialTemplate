import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'mahi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  loginForm!: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: [null],
      password: [null]
    });
  }

  public ngOnInit(): void {
    if (this._authService.isAuthenticated) {
      this._router.navigateByUrl('/dashboard');
    }
  }


  public onSubmit(): void {
    debugger
    let username = this.loginForm.get("username")?.value;
    let password = this.loginForm.get("password")?.value;
    if (username === "test" && password === "test") {
      this.loginValid = true;
      this._authService.isAuthenticated = true;
      this._router.navigateByUrl('/dashboard');
    } else {
      this.loginValid = false;
      this._authService.isAuthenticated = false;
    }

  }

}
