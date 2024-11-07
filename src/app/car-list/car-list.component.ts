import {Component, OnInit} from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {StudentService} from "../services/student.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgClass,
    NgForOf,
    RouterLink
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  carList: Car[]=[];
  constructor(private studentService: StudentService){}

  ngOnInit() {
    this.studentService.getMyCar().subscribe({
      next:(data: Car[])=> this.carList = data,
      error: err=> console.error("Error in Cars",err),
      complete:() => console.log("All list of car"),
    })

  }

}
