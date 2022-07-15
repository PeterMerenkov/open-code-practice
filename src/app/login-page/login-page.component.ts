import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    )
  });

  isSubmitted = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.isSubmitted = true;
    this.auth.login(this.emailValue, this.passwordValue).subscribe({
      next: (resp: any) => {
        localStorage.setItem('auth_token', resp.token);
        this.router.navigate(['/']);
      },
      error: () => {
        this.isSubmitted = false
      }
    });;
    this.isSubmitted = false;
  }
  
  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  get emailValue(): string {
    return this.email.value as string;
  }

  get passwordValue(): string {
    return this.password.value as string;
  }
}
