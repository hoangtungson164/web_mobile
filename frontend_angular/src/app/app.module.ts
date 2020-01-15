import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BankListComponent} from './bank-list/bank-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HeadingComponent} from './heading/heading.component';
import {BankConsensusComponent} from './bank-consensus/bank-consensus.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SendingInfoComponent} from './sending-info/sending-info.component';
import {LoginComponent} from './login/login.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatRadioModule} from '@angular/material';
import { ReportComponent } from './report/report.component';

@NgModule({
    declarations: [
        AppComponent,
        BankListComponent,
        HeadingComponent,
        BankConsensusComponent,
        SendingInfoComponent,
        LoginComponent,
        InformationComponent,
        FooterComponent,
        ReportComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatRadioModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
