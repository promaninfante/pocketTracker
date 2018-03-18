import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PocketTrackerPage } from '../pocket-tracker/pocket-tracker';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if(!params) params ={};
    this.navCtrl.push(PocketTrackerPage);
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
