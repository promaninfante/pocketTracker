import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddExpensesPage } from '../add-expenses/add-expenses';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the ExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses',
  templateUrl: 'expenses.html',
})
export class ExpensesPage {
  transactions: Array<{value:Number, description:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariables: GlobalVariablesProvider) {
    this.transactions = this.globalVariables.expenseTransactions;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensesPage');
  }
  addTrans(){
    this.navCtrl.push(AddExpensesPage);
  }
}
