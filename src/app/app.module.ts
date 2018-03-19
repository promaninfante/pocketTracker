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
    SummaryPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}