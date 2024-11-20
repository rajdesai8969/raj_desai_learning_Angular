import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Car} from "../../Shared/models/Car";
import {carList} from "../../Shared/data/mockUser";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private  cars : Car[] = carList;

  constructor() { }
  getMyCar(): Observable<Car[]>{
    return of (this.cars);
  }
  addCar(newCar:Car) : Observable<Car>{
    this.cars.push(newCar)
    return of(newCar);
  }
  deleteCar(id: number): void {
    this.cars = this.cars.filter(carList => carList.id !== id);
  }
  updateCar(updatedCar: Car): Observable<Car | undefined> {
    const index = this.cars.findIndex(user => user.id === updatedCar.id);
    if (index > -1) {
      this.cars[index] = updatedCar;
      return of(updatedCar);
    }
    return of(undefined);
  }

  getCarId(carId: number): Observable<Car | undefined> {
    return of(this.cars.find(car => car.id === carId));
  }

  generateNewId() {
    return this.cars.length >0 ? Math.max(...this.cars.map(user => user.id)) +1 : 1;
  }
}
