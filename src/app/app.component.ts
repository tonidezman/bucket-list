import { AuthorizationService } from './authorization.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authorizationService: AuthorizationService) {}

  logout() {
    this.authorizationService.logout();
  }

  isLoggedIn() {
    const tokenLength = 36;
    const token = localStorage.getItem('token');
    if (token) {
      return token.length === tokenLength;
    }
    return false;
  }
}
