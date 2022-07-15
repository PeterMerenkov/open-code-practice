import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  isProfileWidgetToggled = false;

  isLoggedIn = this.auth.isLoggedIn();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    
    if (!this.isLoggedIn) {
      this.isProfileWidgetToggled = false;
    }
  }
  

  toggleProfileWidget() {
    this.isProfileWidgetToggled = !this.isProfileWidgetToggled;
  }

  log(a: any) {
    console.log(a);
  }
}
