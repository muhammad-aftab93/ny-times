import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import { MainComponent } from './main/main.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { FiltersComponent } from './search/filters/filters.component';
import { CardsDetailsComponent } from './main/cards-details/cards-details.component';
import { CardsComponent } from './main/cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { CategoryFilterComponent } from './main/category-filter/category-filter.component';
import {MatSelectModule} from "@angular/material/select";
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchCardsComponent } from './search/search-cards/search-cards.component';
import { SearchCardsDetailsComponent } from './search/search-cards-details/search-cards-details.component';



@NgModule({
  declarations: [
    MainComponent,
    FiltersComponent,
    CardsDetailsComponent,
    CardsComponent,
    CategoryFilterComponent,
    SearchComponent,
    LayoutComponent,
    SearchCardsComponent,
    SearchCardsDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
