import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponet } from './Main/Main.component';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRegisterComponent} from "./User-register/User-register.component";
import {UserLoginComponent} from "./User-login/User-login.component";


@NgModule({
  declarations: [
    AppComponent,
    MainComponet,
    ReportComponent,
    InformationComponent,
    ArticleComponent,
    TestinComponent,
    RelationComponent,
    AllarticleComponent,
    AdminComponent,
    UserRegisterComponent,
    UserLoginComponent
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
