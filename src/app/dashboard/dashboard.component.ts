import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  cardform!: FormGroup;

  showcard: any;
  cardhead: any;
  
  cardid: any;
 
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router : Router,
    private service : DataserviceService) {}

  ngOnInit(): void {
    this.cardform=this.formBuilder.group({
      cardtitle:['',Validators.required]
    })
 
  }

  createcard() {
    
    if(this.cardform.valid){
      this.http.post<any>("http://localhost:3000/carddata",this.cardform.value)
      .subscribe(res=>{
        // console.log(this.cardform);
        this.cardform.reset();
        this.showcard=false
        window.location.reload()
        
      })
    }else{
      alert("Add a card name")
      return
    }
  }


}
