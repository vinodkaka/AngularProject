import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringpipe'
})
export class SubstringpipePipe implements PipeTransform {

  transform(value:String,endingletter:number){
    return (value.substring(0,endingletter).concat("..."));
  }

}
