import {Component, OnInit} from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {DecimalPipe, LowerCasePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {CarService} from "../service/car.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgForOf,
    RouterLink,
    TitleCasePipe,
    LowerCasePipe,
    DecimalPipe
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  carList: Car[]=[];
  constructor(private studentService: CarService,private router:Router){
  }

  ngOnInit() {
    this.studentService.getMyCar().subscribe({
      next:(data: Car[])=> this.carList = data,
      error:err=> console.error("Error in Cars",err),
      complete:() => console.log("All list of car"),
    })

  }

}
