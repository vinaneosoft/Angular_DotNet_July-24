import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {
  transform(date: Date,...args:string[] ): number {
   const sysDate=new Date();
   //console.log(args);
   //return (sysDate.getTime()-date.getTime() /(1000 * 60 * 60 * 24));
   const days= Math.floor((Date.UTC(sysDate.getFullYear(), sysDate.getMonth(), sysDate.getDate()) - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) ) /(1000 * 60 * 60 * 24));
   const months=days/30;
   const years=months/12;
   if(args[0]=='d')
    return Math.round(days);
  else if(args[0]=='m')
    return Math.round(months);
  else
    return Math.round(years);
  }

}
