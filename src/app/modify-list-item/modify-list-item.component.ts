import {Component, OnInit} from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {CarService} from "../services/car.service";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})

export class ModifyListItemComponent implements OnInit{
  carForm: FormGroup;
  car : Car | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      Name: ['', Validators.required],
      Model: ['', Validators.required],
      Year: [''],
      Make:[''],
      Color:[''],
      Price:[''],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCarId(+id).subscribe(car => {
        if(car) {
          this.car = car;

          this.carForm.patchValue(car);
        }
      });
    }
  }

  onSubmit(): void {
    const car: Car = this.carForm.value;

    if (car.id) {
      this.carService.updateCar(car);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.carService.generateNewId();
      car.id = newId;
      this.carService.addCar(car);
    }

    this.router.navigate(['/CarListComponent']);
  }

  onDelete(): void {
    const id = this.carForm.get('id')?.value;
    if (id) {
      this.carService.deleteCar(id);
      this.router.navigate(['/CarListComponent']);
    }
  }

  navigateToCarList(): void {
    this.router.navigate(['/CarListComponent']);
  }

}
