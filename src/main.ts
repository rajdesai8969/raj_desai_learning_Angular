import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CarListItemComponent} from "./app/car-list-item/car-list-item.component";
import {CarListComponent} from "./app/car-list/car-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";

const routes: Routes = [
  {path:'', redirectTo: '/CarListComponent', pathMatch: 'full'},
  { path: 'CarListComponent', component: CarListComponent },
  { path: 'CarListComponent/:Name', component: CarListItemComponent },
  {path:'modify-student', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
  ];

bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]})
  .then(r=>console.log('Successful'));
