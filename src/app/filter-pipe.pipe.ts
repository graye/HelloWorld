import { Pipe, PipeTransform } from '@angular/core';
import {User} from './user';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(users: Array<User>, args?: any): any {
    return users.filter((user:User, i:number, arr:User[]) => {
      return user.isOld();
    });
  }
  
}
