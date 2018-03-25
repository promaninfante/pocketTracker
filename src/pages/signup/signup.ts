import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PocketTrackerPage } from '../pocket-tracker/pocket-tracker';
import {User} from '../../models/user';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user:User){
    try{
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    console.log(result);
    this.navCtrl.push(PocketTrackerPage)
  }catch(e){
    console.log(e);
  }
}
}
