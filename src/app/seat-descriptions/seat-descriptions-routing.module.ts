import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatDescriptionsPage } from './seat-descriptions.page';

const routes: Routes = [
  {
    path: '',
    component: SeatDescriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatDescrriptionsPageRoutingModule {}
