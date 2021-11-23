import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MainComponet} from "./Main/Main.component";
import {ReportComponent } from "./Report/Report.component";
import {InformationComponent} from "./Information/Information.component";
import {ArticleComponent} from "./Article/Article.component";
import {TestinComponent} from "./Testin/Testin.component";
import {RelationComponent} from "./Relation/Relation.component";
import {AdminComponent} from "./Admin/Admin.component";
import {UserRegisterComponent} from "./User-register/User-register.component";
import {UserLoginComponent} from "./User-login/User-login.component";

const routes: Routes = [
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
  { path: 'Main', component: MainComponet },
  { path: 'Report', component: ReportComponent },
  { path: 'Information', component: InformationComponent },
  { path: 'Article', component: ArticleComponent },
  { path: 'Testin', component: TestinComponent },
  { path: 'Relation', component: RelationComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'User-register', component: UserRegisterComponent},
  { path: 'User-login', component: UserLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
