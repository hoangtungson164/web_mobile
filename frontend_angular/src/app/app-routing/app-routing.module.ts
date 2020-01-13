import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BankListComponent} from '../bank-list/bank-list.component';
import {BankConsensusComponent} from '../bank-consensus/bank-consensus.component';
import {SendingInfoComponent} from '../sending-info/sending-info.component';

const routes: Routes = [{
  path: 'banks',
  component: BankListComponent,
}, {
  path: 'banks/:id/consensus',
  component: BankConsensusComponent,
}, {
  path: 'banks/:id/sending',
  component: SendingInfoComponent,
}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
