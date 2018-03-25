import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePagePage } from '../pages/welcome-page/welcome-page';
import { LoginPagePage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup/signup';
import {PocketTrackerPage} from '../pages/pocket-tracker/pocket-tracker';
import { CommonModule } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { IncomesPage } from '../pages/incomes/incomes';
import { ExpensesPage } from '../pages/expenses/expenses';
import { SummaryPage } from '../pages/summary/summary';
import { GlobalVariablesProvider } from '../providers/global-variables/global-variables';
import { AddTransactionPage } from '../pages/add-transaction/add-transaction';
import {AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FinancialTipsPage } from '../pages/financial-tips/financial-tips';



@NgModule({
  declarations: [
    MyApp,
    WelcomePagePage,
    LoginPagePage,
    SignupPage,
    PocketTrackerPage,
    HomePage,
    IncomesPage,
    ExpensesPage,
    SummaryPage,
    AddTransactionPage,
    FinancialTipsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePagePage,
    LoginPagePage,
    SignupPage,
    PocketTrackerPage,
    HomePage,
    IncomesPage,
    ExpensesPage,
    SummaryPage,
    AddTransactionPage,
    FinancialTipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVariablesProvider
  ]
})
export class AppModule {}