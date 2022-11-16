import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendPushPageRoutingModule } from './send-push-routing.module';

import { SendPushPage } from './send-push.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPushPageRoutingModule
  ],
  declarations: [SendPushPage]
})
export class SendPushPageModule {}
