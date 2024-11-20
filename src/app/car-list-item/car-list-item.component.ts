import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {Car} from "../../Shared/models/Car";
import {carList} from "../../Shared/data/mockUser";


@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class StudentDetailComponent implements OnInit{
  @Input() car ?: Car;
  ngOnInit(): void {
  }
  //Needs to be | undef because there wont always be a student thats clicked on
//   student: Car | undefined; //The student to display
//   userList: Car[] = [];// to store the list of students
//   currentIndex: number = 0;//to track the current index
//   error: string|null = null;//to store any errors
//
//   constructor(
//     private route: ActivatedRoute,
//     private studentService: StudentService,
//     private router: Router
//   ) {}
// //rewrite onInit to get the list of students and the current student
//   ngOnInit(): void {
//     this.studentService.getStudents().subscribe({
//       next: (users: User[]) => {
//         this.userList = users;
//         this.error = null; // Clear any previous errors
//
//         // Subscribe to paramMap changes to update the page view
//         this.route.paramMap.subscribe(params => {
//           const id = Number(params.get('id'));
//           if (id) {
//             this.currentIndex = this.userList.findIndex(user => user.id === id);
//             this.student = this.userList[this.currentIndex];
//           }
//         });
//       },
//       error: (err) => {
//         this.error = 'Error fetching students';
//         console.error('Error fetching students:', err);
//       }
//     });
//   }
//
//
// //function to go back to student-list view
//   goBack(): void {
//     this.router.navigate(['/students']);
//   }
//
// //function to move foward through array with overflow protection
//   goForward(): void {
//     if (this.currentIndex < this.userList.length - 1) {
//       this.currentIndex++;
//       this.router.navigate(['/students', this.userList[this.currentIndex].id]);
//     }
//   }
// //function to move backward through array with overflow protection
//   goBackward(): void {
//     if (this.currentIndex > 0) {
//       this.currentIndex--;
//       this.router.navigate(['/students', this.userList[this.currentIndex].id]);
//     }
//   }
  Car: any;


  protected readonly carList = carList;
}

export class CarListItemComponent {
}
