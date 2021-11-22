import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponet } from './Main/Main.component';
import { TopMenuComponent } from './topMenu/topMenu.component';
import { ReportComponent } from './Report/Report.component';
import {InformationComponent} from "./Information/Information.component";
import { ArticleComponent } from './Article/Article.component';
import { TestinComponent } from './Testin/Testin.component';
import { RelationComponent } from './Relation/Relation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { AllarticleComponent } from './allarticle/allarticle.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './Admin/Admin.component';
import { AdminRegisterComponent } from './admin-register/Admin-register.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainComponet,
    TopMenuComponent,
    ReportComponent,
    InformationComponent,
    ArticleComponent,
    TestinComponent,
    RelationComponent,
    AllarticleComponent,
    AdminComponent,
    AdminRegisterComponent
  ],
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        AppRoutingModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
