import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class getBookId {
  constructor(public statusCode: number, public registrationNumber: number, public message: string) { }
}
export class data {
  constructor(public id: number, public bookgener: string) { }
}
export class bookType {
  constructor(public statusCode: number, public message: string, public data: Array<data>) { }
}
export class saveBookResponse {
  constructor(public statusCode: number, public message: string) { }
}

export class BooksType{
  constructor(public bookId:number,public bookName:string,public authorName:string,public bookPrice:number,public bookGenere:string,
    public fromDate:Date,public toDate:Date,public noOfDays:number){}
}

export class showBooks{
  constructor(public statusCode:number,public message:string,public dataBook:Array<BooksType>){}
}


@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  getBookRegistrationNumber() {
    return this.http.get<getBookId>(`${environment.url}/api/books/getBookId`);
  }

  getListOfBookType() {
    return this.http.get<bookType>(`${environment.url}/api/books/showAllBookType`);
  }

  saveBook(data) {
    return this.http.post<saveBookResponse>(`${environment.url}/api/books/saveBook`, data);
  }

  checkDuplicateBook(bookName) {
    const formdata = new FormData();
    formdata.append('bookName', bookName);
    return this.http.post<saveBookResponse>(`${environment.url}/api/books/checkDuplicateBookName`, formdata);
  }

  showBooks(){
    return this.http.get<showBooks>(`${environment.url}/api/books/showAllBooks`);
  }

  deleteBook(bookId){
    const formdata=new FormData();
    formdata.append('bookId',bookId);
    return this.http.post<getBookId>(`${environment.url}/api/books/deletebook`,formdata);
  }
}
