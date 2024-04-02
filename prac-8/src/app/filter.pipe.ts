import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';

@Pipe({
  name: 'filter',
  pure: false //Use if you want as it recalculates(forces pipe to update) but can cause preformance issues 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if ( value.length === 0 || filterString ===''){
      return value
    }
    const resultArray = []
    for(const item of value){
      
      if(item[propName] === filterString){
        resultArray.push(item)
      }
    
    }
    return resultArray;
  }

}
