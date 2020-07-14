import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService/book.service';
import { ToasterService } from '../toasterService/toaster.service';
import {MatTableDataSource} from '@angular/material/table';

export class allBooks {
  constructor(public bookId: number, public bookName: string, public authorName: string, public bookPrice: number, public bookGenere: string,
    public fromDate:Date,public toDate:Date,public noOfDays:number)
   { }
}

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  dataSource: allBooks[];
  displayedColumns: string[] = ['bookName', 'authorName', 'bookPrice','bookGenere','fromDate','toDate','noOfDays','action'];
  
  constructor(private bookService: BookService,private toaster:ToasterService) { }

  ngOnInit(): void {
    this.bookService.showBooks().subscribe(
      resp => {
        if (resp.statusCode == 200) {
          this.dataSource = resp.dataBook;
        }
        if(resp.statusCode == 400){
          this.toaster.Warning(resp.message);
        }
      },
      err=>{
        this.toaster.Error('Something went wrong');
      }
    )
  }

  editBook(bookId){
    console.log(bookId);
  }
  
  deleteBook(bookId){
    console.log(bookId);
    this.bookService.deleteBook(bookId).subscribe(
      resp=>{
        if(resp.statusCode == 200){
          this.bookService.showBooks().subscribe(
            resp=>{
              this.dataSource=resp.dataBook;
            }
          )
          this.toaster.Success(resp.message)
        }
        else if(resp.statusCode == 400){
          this.toaster.Error(resp.message);
        }
      },
      err=>{
        this.toaster.Error('Something went wrong');
      }
    )
  }

}
