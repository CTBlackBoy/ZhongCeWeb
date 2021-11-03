import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponet} from "./Main/Main.component";
import { ReportComponent } from "./Report/Report.component";
import {InformationComponent} from "./Information/Information.component";
import {ArticleComponent} from "./Article/Article.component";
import {TestinComponent} from "./Testin/Testin.component";
import {RelationComponent} from "./Relation/Relation.component";

const routes: Routes = [
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
  { path: 'Main', component: MainComponet },
  { path: 'Report', component: ReportComponent },
  { path: 'Information', component: InformationComponent },
  { path: 'Article', component: ArticleComponent },
  { path: 'Testin', component: TestinComponent },
  { path: 'Relation', component: RelationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
