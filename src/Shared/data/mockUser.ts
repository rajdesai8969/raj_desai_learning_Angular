import {Car} from "../models/Car";

export const carList: Car[]=[
  {
    id: 1,Name: "BMW", Model: "X5", Year: 2023, Make: "German", Color: "Black", isAdmin: true, images: "/assets/bmw-x5.jpg",

  },
  {
    id: 2,
    Name: "Audi",
    Model: "Rs7",
    Year: 2024,
    Make: "German",
    Color: "Blue",
    isAdmin: true,
    images: "/assets/audi-rs7.jpg",

  },
  {id: 3,Name: "Lexus", Model: "LFA", Year: 2022, Make: "Japan",Color: "Yellow" , isAdmin: false, images:"/assets/lexus-lfa.jpg"},
  {id :4,Name: "Hyundai", Model: "Elantra", Year:2018, Make: "Korea", Color: "Black", isAdmin: true, images:"/assets/hyundai-elentra.jpg"}
]
