import {Component, OnInit} from '@angular/core';
import { Car} from "../../Shared/models/Car";
import {NgForOf, NgIf} from "@angular/common";
import {StudentDetailComponent} from "../car-list-item/car-list-item.component";
import {RouterLink} from "@angular/router";
import {StudentService} from "../services/car.service";
import {carList} from "../../Shared/data/mockUser";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    NgForOf,
    StudentDetailComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class StudentListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  userList: Car[] = [];
  error: string | null = null; //Var to hold an error message

  constructor (private studentService: StudentService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    // This lifecycle hook is a good place to fetch and init our data
    this.studentService.getStudents().subscribe({
      next: (data: Car[]) => {
        this.userList = data;
        this.error = null; // Clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching students'; // Set an error message
        console.error("Error fetching Students", err);
      },
      complete: () => console.log("Student data fetch complete!")
    });
  }
  selectedStudent?: Car;
  selectStudent(student: Car): void {
    this.selectedStudent = student;
  }


  protected readonly carList = carList;
}

export class CarListComponent {
}
