import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timelimit'
})
export class TimelimitPipe implements PipeTransform {

  transform(distance: number, range: number): any {
    if(distance>range){
      return 'N/A (Distance out of range)';
    }
    else if(distance.toFixed(1) === range.toFixed(1)){
      return distance.toFixed(1)+' mile(s)(Maximun Distance To Travel)';
    }
    else{
      return distance.toFixed(1)+' mile(s)';
    }
  }

}
