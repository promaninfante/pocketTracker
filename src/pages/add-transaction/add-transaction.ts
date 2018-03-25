import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalVariablesProvider} from '../../providers/global-variables/global-variables';
import { IncomesPage } from '../incomes/incomes';

/**
 * Generated class for the AddTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-transaction',
  templateUrl: 'add-transaction.html',
})
export class AddTransactionPage {

  incomeValue: Number;
  incomeDescription: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariables: GlobalVariablesProvider) {
    
  }

   setValues(){
    alert("You have added an income transaction");
 
    this.globalVariables.incomeTransactions.push({
      value: this.incomeValue,
      description: this.incomeDescription
    })
    this.incomeDescription ="";
    this.incomeValue= 0;
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTransactionPage');
  }

}
