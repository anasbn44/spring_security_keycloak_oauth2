import { Component } from '@angular/core';
import {SecurityService} from "./services/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-front-angular';
  constructor(public securityService: SecurityService ) {
  }
  async login(){
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
  }
  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }

  account() {
    window.location.href="http://localhost:8080/realms/ab-realm/account/#/personal-info";
  }
}
