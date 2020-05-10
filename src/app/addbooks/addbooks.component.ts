import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService/book.service';
import { ToasterService } from '../toasterService/toaster.service';

export class Books{
  constructor(public id:number,public bookgener:string){}
}

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  registrationNumber: string = '';
  errorMessage: string = '';
  bookName:string='';
  authorName:string='';
  bookPrice:number;
  bookType:Books;
  
  constructor(private bookService: BookService,private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.getlistBook();
  }

  generateId() {
    this.bookService.getBookRegistrationNumber().subscribe(
      res => {
        
        if (res.statusCode === 200) {
          this.successfull(res);
        } else if (res.statusCode === 400) {
          this.unsessfull(res);
        }
      },
      err => {
        this.fatal(err);
      }
    )
  }
  successfull(res) {
    this.registrationNumber=res.registrationNumber;
  }
  unsessfull(res) {
    this.errorMessage=res.mesage;
    this.toasterService.Warning(this.errorMessage);
  }
  fatal(err) {
    this.errorMessage = err.mesage;
    this.toasterService.Error('Something went Wrong');
  }

  getlistBook(){
    this.bookService.getListOfBookType().subscribe(
      resp=>{
        if(resp.statusCode===200){
          this.successfullBookList(resp);          
        }
      }
    )
  }
  successfullBookList(resp){
    this.bookType=resp.data;
    console.log('Book type is ',this.bookType);
  }

}
