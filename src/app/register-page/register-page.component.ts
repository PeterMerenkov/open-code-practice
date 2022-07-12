import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    username: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    password: new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
    confirmedPassword: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    )
  },
  {
    validators: confirmPasswordValidator
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
    this.auth.register(this.usernameValue, this.emailValue, this.passwordValue).subscribe({
      next: () => {
        this.router.navigate(['/singin'])
      },
      error: () => {
        this.isSubmitted = false
      }
    });
  }
  
  get email() {
    return this.form.get('email')!;
  }

  get username() {
    return this.form.get('username')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  get confirmedPassword() {
    return this.form.get('confirmedPassword')!;
  }

  get emailValue(): string {
    return this.email.value as string;
  }

  get usernameValue(): string {
    return this.username.value as string;
  }

  get passwordValue(): string {
    return this.password.value as string;
  }
}

const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmedPassword')?.value;

  return password && confirmPassword && password === confirmPassword ? null : { passwordsNotSame: true }
}