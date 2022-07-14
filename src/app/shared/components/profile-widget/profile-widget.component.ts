import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss']
})
export class ProfileWidgetComponent implements OnInit {

  userData = {
    email: '',
    username: '',
    role: ''
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userData = this.auth.getUserDate();
  }

  logout() {
    this.auth.logout()
  }
}
