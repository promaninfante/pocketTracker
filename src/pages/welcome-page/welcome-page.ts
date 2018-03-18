import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPagePage } from '../login-page/login-page';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-welcome-page',
  templateUrl: 'welcome-page.html'
})
export class WelcomePagePage {

  constructor(public navCtrl: NavController) {
  }
  goToLoginPage(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPagePage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
