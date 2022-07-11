import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isProfileWidgetToggled = false;

  isLoggedIn = this.auth.isLoggedIn();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
  }

  toggleProfileWidget() {
    this.isProfileWidgetToggled = !this.isProfileWidgetToggled;
  }

}
