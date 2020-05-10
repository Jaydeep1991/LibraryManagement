import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService/book.service';
import { ToasterService } from '../toasterService/toaster.service';

export class Books {
  constructor(public id: number, public bookgener: string) { }
}
export class saveBooks {
  constructor(public bookId: number, public authorName: string, public bookPrice: number, public bookGenere: string) { }
}

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  registrationNumber: number;
  errorMessage: string = '';
  bookName: string = '';
  authorName: string = '';
  bookPrice: number;
  selectedBook: string;
  bookType: Books[];
  data = new saveBooks(0, '', 0, '');

  constructor(private bookService: BookService, private toasterService: ToasterService) { }

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
    this.registrationNumber = res.registrationNumber;
  }
  unsessfull(res) {
    this.errorMessage = res.mesage;
    this.toasterService.Warning(this.errorMessage);
  }
  fatal(err) {
    this.errorMessage = err.mesage;
    this.toasterService.Error('Something went Wrong');
  }

  getlistBook() {
    this.bookService.getListOfBookType().subscribe(
      resp => {
        if (resp.statusCode === 200) {
          this.successfullBookList(resp);
        }
      }
    )
  }
  successfullBookList(resp) {
    this.bookType = resp.data;
  }

  checkDuplicate(){
    console.log(this.bookName);
  }

  saveBook() {
    this.data.bookId = this.registrationNumber;
    this.data.authorName = this.authorName;
    this.data.bookPrice = this.bookPrice;
    this.data.bookGenere = this.selectedBook;
    this.bookService.saveBook(this.data).subscribe(
      resp => {
        if (resp.statusCode === 200) {
          this.toasterService.Success(resp.message)
        } else if (resp.statusCode === 400) {
          this.toasterService.Error(resp.message)
        }
      },
      err => {
        this.toasterService.Error('Something Error Happened')
      }
    )
  }
}
