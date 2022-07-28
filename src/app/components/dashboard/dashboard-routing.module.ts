import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import { SearchComponent } from './search/search.component';
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
