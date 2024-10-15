import {Component, Input} from '@angular/core';
import {Car} from "../../Shared/models/Car";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent {
  @Input() Car ?: Car;

}
