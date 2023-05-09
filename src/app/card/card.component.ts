import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';

import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDrag} from '@angular/cdk/drag-drop'; //-------------material





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  TodoForm!: FormGroup;

  cardhead: any;
  showinput: any;
  Todovalue: any;
  card: any;
  cardvalue: any=[];

  index: any;
  searchkey : any;

  cardarray : any=[]
  todoarray : any=[]
  meta: any;

  InputForm: any=false;
  HideAdd: any;


  //------------------------------- M a t e r i a l ---------------------------------

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
 //--------------------------------------------------------------------------------


  constructor(private formBuilder: FormBuilder,
    private service: DataserviceService,
    private http: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {

    this.getcard()
    this.getTodo()


    // this.Todoform()
    // this.getdetails()
    // this.matchcard()
    // this.getdetails()

    this.service.searchterm.subscribe((value:any)=>{
    this.searchkey=value
      })

  }

  getcard() {
    this.service.cardview()
      .subscribe(res => {
        this.cardhead = res;
        // console.log(this.cardtitle);

      })
  }

  addTodo() {
    if (this.TodoForm.valid) {
      this.http.post<any>("http://localhost:3000/Tododata", this.TodoForm.value)
        .subscribe(res => {
          // console.log(this.TodoForm);
          this.TodoForm.reset();
          // this.router.navigate(['/home']);
          this.getTodo()
          this.index = false
        })
    }else{
      alert("Add a task")
      return
    }
  }

  Todoform() {
    this.TodoForm = this.formBuilder.group({
      Tododata: ['', Validators.required],
      CardId: this.card
    })
  }

  getTodo() {
    this.service.TodoView()
      .subscribe(res => {
        this.Todovalue = res;
      })
  }

  cardid(id: any) {

    this.index = id;
    this.card = id
    this.Todoform()
    this.InputForm=false
  }

  // getdetails() { 
  //   this.service.cardview().subscribe(res=>{
  //   this.cardarray=res
  //   console.log('card',this.cardarray);

  //   })

  //   this.service.TodoView().subscribe(res=>{
  //   this.todoarray=res
  //   console.log('Todo',this.todoarray);
  
  //   })
  //   this.matchcard()
  // }

  // matchcard() {
  //   this.cardarray = this.cardarray.map((item: any) => {
  //     item['tasks'] = this.todoarray.filter((t: any) => t.CardId == item.id)
  //     return item;
  //   })
  // }

  DeleteTitle(key: any) {
    this.service.DeleteCard(key)
      .subscribe(res => {
        this.Deletelist(key)
        this.getcard()
      })
  }
  
  Deletelist(key: any) {
    this.service.Fetchtodo(key)
    .subscribe(res => {
      this.meta=res
      for(var i=0;i< this.meta.length;i++){
        console.log(this.meta[i].id);
        this.service.DeleteTodo(this.meta[i].id).subscribe(res =>{
          this.getcard()
        })
      }
    })
    }

  close() {
    this.InputForm=true
  }




  
  }







