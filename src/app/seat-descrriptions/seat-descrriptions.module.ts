import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatDescrriptionsPageRoutingModule } from './seat-descrriptions-routing.module';

import { SeatDescrriptionsPage } from './seat-descrriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatDescrriptionsPageRoutingModule
  ],
  declarations: [SeatDescrriptionsPage]
})
export class SeatDescrriptionsPageModule {}
