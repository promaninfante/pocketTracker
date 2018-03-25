import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { PocketTrackerPage } from '../pocket-tracker/pocket-tracker';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPagePage {

  user = {} as User;
  
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user:User){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    console.log(result);
    this.navCtrl.push(PocketTrackerPage);
  }catch(e){
    console.log(e);
  }}

  register(){
    this.navCtrl.push(SignupPage);
  }
}
