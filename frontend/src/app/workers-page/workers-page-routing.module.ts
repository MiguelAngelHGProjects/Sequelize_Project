import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkersPagePage } from './workers-page.page';
import { UpdateWorkersPage } from '../update-workers/update-workers.page';

const routes: Routes = [
  {
    path: '',
    component: WorkersPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkersPagePageRoutingModule {}
