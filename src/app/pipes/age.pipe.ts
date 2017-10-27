import { Post } from './../models/post';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'Age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any {
    let date = moment(value, 'DD/MM/YYYY HH:mm');

    return moment().diff(date, 'years');
  }

}
