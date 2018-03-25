import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddTransactionPage } from '../add-transaction/add-transaction';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the IncomesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incomes',
  templateUrl: 'incomes.html',
})

export class IncomesPage {
  
  transactions: Array<{value:Number, description:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVariables: GlobalVariablesProvider) {
    this.transactions = this.globalVariables.incomeTransactions;
    
  }

  addTrans(){
    this.navCtrl.push(AddTransactionPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomesPage');
  }

}
