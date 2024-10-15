import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CarListItemComponent} from "./app/car-list-item/car-list-item.component";
import {CarListComponent} from "./app/car-list/car-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/CarListComponent', pathMatch: 'full'},
  { path: 'CarListComponent', component: CarListComponent },
  { path: 'CarListComponent/:Name', component: CarListItemComponent }
  ]

bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]})
  .then(r=>console.log('Successful'));
