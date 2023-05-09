import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }

  transform(value:any[], filterstring: string,propName:string): any {
    const result:any=[]
    if(!value || filterstring==='' || propName===''){
    return value;
    }
    
    value.forEach((item:any)=>{
    if(item[propName].trim().toLowerCase().includes(filterstring.toLowerCase())){
    result.push(item)
    }
    })
    return result;
    }

}


