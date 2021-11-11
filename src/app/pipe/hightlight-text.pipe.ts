import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hightlightText'
})
export class HightlightTextPipe implements PipeTransform {

  transform(value: any, args: any): unknown {

    if(args==""){
      return value;
    }

    if(!args){
      return
    }
    
    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);
    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
  }

}
