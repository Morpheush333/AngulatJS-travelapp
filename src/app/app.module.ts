import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TripListComponent } from './trip-list/trip-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatMenuTrigger, MatToolbarModule, MatMenuModule, MatCard, MatCardModule} from '@angular/material';
import { TripCreateComponent } from './trip-create/trip-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Trip } from './domain/trip';
import { HomePageComponent } from './home-page/home-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TripListElementComponent } from './trip-list-element/trip-list-element.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'trips',
    component: TripListComponent
  },
  {
    path: 'trips/create',
    component: TripCreateComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripCreateComponent,
    HomePageComponent,
    NavMenuComponent,
    TripListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatMenuModule,
    MatCardModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
