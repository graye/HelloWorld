import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(value: Array<number>, args?: any): any {
    var sum = 0;
    value.forEach(function(i, val){
      sum+=val;
    })

    return sum;
  }

}
