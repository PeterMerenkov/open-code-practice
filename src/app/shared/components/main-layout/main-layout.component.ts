import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, DoCheck {

  isProfileWidgetToggled = false;

  isLoggedIn = this.auth.isLoggedIn();

  constructor(
    private auth: AuthService,
    private router: Router) {
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          this.isProfileWidgetToggled = false;
        }
      })
     }

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
