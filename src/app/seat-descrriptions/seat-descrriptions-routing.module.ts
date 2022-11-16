import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatDescrriptionsPage } from './seat-descrriptions.page';

const routes: Routes = [
  {
    path: '',
    component: SeatDescrriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatDescrriptionsPageRoutingModule {}
