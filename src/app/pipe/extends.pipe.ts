import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extends'
  
})
export class ExtendsPipe implements PipeTransform {

  transform(value: string, appendText: string): string {
    if (appendText==null) return value;

    return value+=appendText;

  }

}
