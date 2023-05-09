import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  cardtitle: any;
  cardarray: any;

  searchterm = new BehaviorSubject("");  

  constructor(private http: HttpClient) { }

  cardview() {
    return this.http.get<any>("http://localhost:3000/carddata")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  TodoView() {
    return this.http.get<any>("http://localhost:3000/Tododata")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  DeleteCard(key: any) {
    return this.http.delete<any>(`http://localhost:3000/carddata/${key}`) 
  }

  Fetchtodo(key: any) {
    return this.http.get<any>(`http://localhost:3000/Tododata/?CardId=${key}`)
    
  }

  DeleteTodo(key: any) {
    return this.http.delete<any>(`http://localhost:3000/Tododata/${key}`)
      
  }

  

 
}
