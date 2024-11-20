import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from "../../Shared/models/car";

export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{cars: Car[]} {

    const cars: Car[] = [
      {
        Name: "BMW",
        Model: "X5",
        Year: 2023,
        Make: "German",
        Color: "Black",
        isAdmin: true,
        images: "/assets/bmw-x5.jpg",
        id: 0
      },
      {
        Name: "Audi",
        Model: "Rs7",
        Year: 2024,
        Make: "German",
        Color: "Blue",
        isAdmin: true,
        images: "/assets/audi-rs7.jpg",
        id: 0
      },
      {
        Name: "Lexus",
        Model: "LFA",
        Year: 2022,
        Make: "Japan",
        Color: "Yellow",
        isAdmin: false,
        images: "/assets/lexus-lfa.jpg",
        id: 0
      },
      {
        Name: "Hyundai",
        Model: "Elantra",
        Year: 2018,
        Make: "Korea",
        Color: "Black",
        isAdmin: true,
        images: "/assets/hyundai-elentra.jpg",
        id: 0
      }
    ];
    return { cars };
  }
}
