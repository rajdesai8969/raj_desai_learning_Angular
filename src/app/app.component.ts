import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Car} from "../Shared/models/Car";
import {NgForOf, NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";
import {CarListItemComponent} from "./car-list-item/car-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent,CarListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'raj-desai-learning-Angular';


}
