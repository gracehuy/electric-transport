import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(range: number, speed: number, distance: number): any {
    if(distance>range){
      return 'N/A (Distance out of range)';
    }
    else{
      return (distance/speed*60).toFixed(0)+' min(s)';
    }
  }

}
