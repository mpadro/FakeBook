import { Post } from './../models/post';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'PostDate'
})
export class PostDatePipe implements PipeTransform {

  transform(value: Date): any {
    let date = moment(value, 'DD/MM/YYYY HH:mm');

    return date.format("DD/MM/YYYY") + " (" + date.fromNow() + ")";
  }

}
