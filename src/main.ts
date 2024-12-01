import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CarListComponent} from "./app/car-list/car-list.component";



const routes: Routes = [
  {path:'', redirectTo: '/CarListComponent', pathMatch: 'full'},
  { path: 'CarListComponent', component: CarListComponent },
  { path: 'CarListComponent/:Name',
    loadComponent: () =>
          import('./app/car-list-item/car-list-item.component').then(m => m.CarListItemComponent)},
  {path:'modify-student',
    loadComponent: () =>
          import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**',
    loadComponent: () =>
          import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
  ];

bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]})
  .then(r=>console.log('Successful'));
