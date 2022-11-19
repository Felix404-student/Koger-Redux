import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatDescrriptionsPageRoutingModule } from './seat-descriptions-routing.module';

import { SeatDescriptionsPage } from './seat-descriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatDescrriptionsPageRoutingModule
  ],
  declarations: [SeatDescriptionsPage]
})
export class SeatDescrriptionsPageModule {}
