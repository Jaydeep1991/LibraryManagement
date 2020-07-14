import { Component, OnInit } from '@angular/core';
import { BookService } from '../BookService/book.service';
import { ToasterService } from '../toasterService/toaster.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

export class Books {
  constructor(public id: number, public bookgener: string) { }
}
export class saveBooks {
  constructor(public bookId: number, public bookName: string, public authorName: string, public bookPrice: number, public bookGenere: string) { }
}

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  registrationNumber: number;
  bookName: string;
  bookType: Books[];
  duplicateBook: string;
  duplicateBookFlag: boolean = false;
  book: FormGroup;

  constructor(private bookService: BookService, private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.getlistBook();
    this.book = new FormGroup({
      "bookId": new FormControl('', Validators.required),
      "bookName": new FormControl('', Validators.required),
      "authorName": new FormControl('', Validators.required),
      "bookPrice": new FormControl('', Validators.required),
      "bookGenere": new FormControl('')
    })
  }

  generateId() {
    this.bookService.getBookRegistrationNumber().subscribe(
      res => {

        if (res.statusCode === 200) {
          this.registrationNumber = res.registrationNumber;
          this.book.controls['bookId'].setValue(this.registrationNumber);
        }
        else if (res.statusCode === 400) {
          this.toasterService.Warning(res.message);
        }
      },
      err => {
        this.toasterService.Error('Something went Wrong');
      }
    )
  }


  saveNewBook() {
    if (!this.duplicateBookFlag) {
      console.log(this.book.value);
      this.bookService.saveBook(this.book.value).subscribe(
        resp => {
          if (resp.statusCode == 200) {
            this.toasterService.Success(resp.message);
          }
          else if (resp.statusCode == 400) {
            this.toasterService.Error(resp.message);
          }
          else if (resp.statusCode == 204) {
            this.toasterService.Error(resp.message);
          }
        },
        err => {
          this.toasterService.Error('Something went wrong');
        }
      )
    }
    else {
      this.toasterService.Error("Book Already exists");
    }
  }




  getlistBook() {
    this.bookService.getListOfBookType().subscribe(
      resp => {
        if (resp.statusCode === 200) {
          this.bookType = resp.data;
        }
      }
    )
  }


  checkDuplicateBook() {
    this.bookService.checkDuplicateBook(this.book.get('bookName').value).subscribe(
      resp => {
        if (resp.statusCode === 409) {
          this.duplicateBookFlag = true;
          this.duplicateBook = resp.message;
          this.toasterService.Warning(resp.message);
        }
      },
      err => {
        this.toasterService.Warning('Something went Wrong');
      }
    );
  }
}
