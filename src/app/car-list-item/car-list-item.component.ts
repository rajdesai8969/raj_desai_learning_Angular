import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {NgForOf, NgIf} from "@angular/common";
import {carList} from "../../Shared/data/mockUser";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent implements OnInit{
  car : Car | undefined;
  carList : Car[] =[];
  currentIndex : number = 0;
constructor(private route : ActivatedRoute,
  private carService : CarService,
  private router :Router) {
}


  ngOnInit(): void {
    this.carService.getMyCar().subscribe(cars =>{
      this.carList = cars;

      this.route.paramMap.subscribe(params =>{
        const id = Number(params.get('id'));
        if(id){
          this.currentIndex = this.carList.findIndex(cars => cars.id === id);
          this.car = this.carList[this.currentIndex];
        }
      });
    });
  }
  goBack(): void{
    this.router.navigate(['cars']);
  }
  goForward(): void{
    if(this.currentIndex < this.carList.length -1){
      this.currentIndex++;
      this.router.navigate(['cars',this.carList[this.currentIndex].id]);
    }
  }
  goBackward() : void {
  if(this.currentIndex>0){
    this.currentIndex --;
    this.router.navigate(['/cars',this.carList[this.currentIndex].id]);
  }
  }
}
