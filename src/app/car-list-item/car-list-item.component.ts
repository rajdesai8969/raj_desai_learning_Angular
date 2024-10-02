import {Component, Input} from '@angular/core';
import {Car} from "../../model/Car";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent {
  @Input() Car ?: Car;

}
