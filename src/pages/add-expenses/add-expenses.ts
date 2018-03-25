import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GlobalVariablesProvider} from '../../providers/global-variables/global-variables';

/**
 * Generated class for the AddExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-expenses',
  templateUrl: 'add-expenses.html',
})
export class AddExpensesPage {
  expenseValue: Number;
  expenseDescription: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public globalVariables: GlobalVariablesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpensesPage');
  }
  setValues(){
    alert("You have added an expense transaction");
 
    this.globalVariables.expenseTransactions.push({
      value: this.expenseValue,
      description: this.expenseDescription
    })
    this.expenseDescription ="";
    this.expenseValue= 0;
  }
}
