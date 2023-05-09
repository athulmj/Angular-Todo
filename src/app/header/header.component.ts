import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  Todovalue: any=[];
  Todocontent: any=[];
  

  searchkey : any;

  // @ViewChild('htmlData') htmlData!: ElementRef;

  @ViewChild('content') content!: ElementRef;  


constructor(private service: DataserviceService) {}

  ngOnInit(): void {

    this.getTodo()

    // this.service.TodoView().subscribe(res => {
    //   this.Todovalue = res;
    //   // console.log(this.Todovalue);
      
      
    //     })

  

  }

  // search(value:string): void {
  //   debugger
  //   this.Todocontent=this.Todovalue.filter((val:any) =>
  //   val.Tododata.toLowerCase().includes(value)
  //   );

  // }


  search(event:any){
    debugger
    this.searchkey=event.target.value
    this.service.searchterm.next(this.searchkey)
    
    }

    openPDF() {
      let data: any =document.getElementById('htmlData');
      html2canvas(data).then((canvas)=>{
        let fileWidth=150;
        let fileHeight=(canvas.height*fileWidth)/ canvas.width;
        const FILEURI=canvas.toDataURL('image/png');
        let PDF=new jsPDF('p','mm','a4');
        let position=0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('angular-demo.pdf');
      });
    }

    
  // public SavePDF(): void {  
  //   let content=this.content.nativeElement;  
  //   let doc = new jsPDF();  
  //   let _elementHandlers =  
  //   {  
  //     '#editor':function(element,renderer){  
  //       return true;  
  //     }  
  //   };  
  //   doc.fromHTML(content.innerHTML,15,15,{  
  
  //     'width':190,  
  //     'elementHandlers':_elementHandlers  
  //   });  
  
  //   doc.save('test.pdf');  
  // }  

    getTodo() {
      this.service.TodoView()
        .subscribe(res => {
          this.Todovalue = res;
        })
    }
    
}
