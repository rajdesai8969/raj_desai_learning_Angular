import { Component } from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {


  carList: Car[]=[]
}
