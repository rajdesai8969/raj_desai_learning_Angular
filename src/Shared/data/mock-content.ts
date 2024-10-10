import {Car} from "../models/Car";
export class CarListComponent {
  car1: Car = {Name: "BMW", Model: "X5", Color: "Black", Make: "German", Year: 2023, isAdmin: true};
  car2: Car = {Name: "Audi", Model: "Rs7", Color: "Blue", Make: "German", Year: 2014, isAdmin: true};
  car3: Car = {Name: "Lexus", Model: "LFA", Color: "Red", Make: "Japan", Year: 2018, isAdmin: false};
  car4: Car = {Name: "Hyundai", Model: "Elantra", Color: "White", Make: "Korea", Year: 2019, isAdmin: true};
}
