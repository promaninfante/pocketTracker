import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PocketTrackerPage } from './pocket-tracker';

@NgModule({
  declarations: [
    PocketTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(PocketTrackerPage),
  ]
})
export class PocketTrackerPageModule {}
