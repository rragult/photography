import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailShortPipe'
})
export class MailShortPipePipe implements PipeTransform {

  transform(value: any): any {
   return value.slice(0,1);
    
  }

}
