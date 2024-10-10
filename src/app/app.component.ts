import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Car} from "../Shared/models/Car";
import {NgForOf, NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'raj-desai-learning-Angular';

  car1 : Car ={Name : "BMW", Model : "X5" , Color : "Black", Make:"German", Year: 2023, isAdmin : true};
  car2 : Car ={Name : "Audi", Model : "Rs7" , Color : "Blue", Make:"German", Year: 2014, isAdmin : true};
  car3 : Car ={Name : "Lexus", Model : "LFA" , Color : "Red", Make:"Japan", Year: 2018, isAdmin : false};
  car4 : Car ={Name : "Hyundai", Model : "Elantra" , Color : "White", Make:"Korea", Year: 2019, isAdmin : true};
  car5 : Car ={Name : "Honda", Model : "Civic" , Color : "Green", Make:"Japan", Year: 2021, isAdmin : false};
  car6 : Car ={Name : "Dodge", Model : "Charger" , Color : "Yellow", Make:"USA", Year: 2020, isAdmin : false};

  carList: Car[]=[this.car1,this.car2,this.car3,this.car4,this.car5,this.car6]
  // Car: string;
  car: any;

}
