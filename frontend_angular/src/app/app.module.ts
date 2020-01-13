import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BankListComponent} from './bank-list/bank-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HeadingComponent} from './heading/heading.component';
import {BankConsensusComponent} from './bank-consensus/bank-consensus.component';
import {FormsModule} from '@angular/forms';
import { SendingInfoComponent } from './sending-info/sending-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    HeadingComponent,
    BankConsensusComponent,
    SendingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
