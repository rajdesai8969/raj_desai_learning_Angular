import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Car} from "../../Shared/models/Car";
import {carList} from "../../Shared/mockUser";
import {buildApplication} from "@angular-devkit/build-angular";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private cars: Car[]=carList;

  constructor() { }

  getMyCar(): Observable<Car[]>{
    return of(carList);
  }
  addCar(car:Car): Observable<Car[]>{
    this.cars.push(car);
    return of(this.cars);
  }
  updateCar(car: Car): Observable<Car[]>{
    const index = this.cars.findIndex(user=> user.id === car.id);
    if(index !==1){
      this.cars[index] = car;
    }
    return of(this.cars);
  }
  deleteCar(car: number): Observable<Car[]>{
    this.cars = this.cars.filter(user=> user.id !== car);
    return of(this.cars);
  }
  getCarId(carId: number): Observable<Car | undefined>{
    const car = this.cars.find(car => car.id === carId);
    return  of(car);
  }
}
