import { Component } from '@angular/core';
import {Car} from "../../model/Car";
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
  car1 : Car ={Name : "BMW", Model : "X5" , Color : "Black", Make:"German", Year: 2023, isAdmin : true};
  car2 : Car ={Name : "Audi", Model : "Rs7" , Color : "Blue", Make:"German", Year: 2014, isAdmin : true};
  car3 : Car ={Name : "Lexus", Model : "LFA" , Color : "Red", Make:"Japan", Year: 2018, isAdmin : false};
  car4 : Car ={Name : "Hyundai", Model : "Elantra" , Color : "White", Make:"Korea", Year: 2019, isAdmin : true};


  carList: Car[]=[this.car1,this.car2,this.car3,this.car4]
}
