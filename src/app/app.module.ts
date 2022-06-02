import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from "./my/my.component";
import { ParkingComponent } from './parking/parking.component';
import { NewParkingComponent } from './new-parking/new-parking.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { CarListComponent } from './car-list/car-list.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: 'parkings', component: ParkingListComponent},
  {path: 'cars/prkId', component: CarListComponent},
  {path: '', redirectTo: 'parkings', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    ParkingComponent,
    NewParkingComponent,
    ParkingListComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
