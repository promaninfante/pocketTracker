import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PocketTrackerPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pocket-tracker',
  templateUrl: 'pocket-tracker.html'
})
export class PocketTrackerPage {

  homeRoot = 'HomePage'
  incomesRoot = 'IncomesPage'
  expensesRoot = 'ExpensesPage'
  summaryRoot = 'SummaryPage'


  constructor(public navCtrl: NavController) {}

}
