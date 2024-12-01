import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../../Shared/models/Car";

@Pipe({
  name: 'nameModel',
  standalone: true
})
export class NameModelPipe implements PipeTransform {
  transform(carList : Car) :String {
    return `${carList.Name} ${carList.Model}`;
  }

}
