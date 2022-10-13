import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import { Stiker } from '../models/stiker.model';

@Injectable({
  providedIn: 'root'
})
export class StikerService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-sucess']
    })
  }

  create(product: Stiker): Observable<Stiker> {
    return this.http.post<Stiker>(this.baseUrl, product).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Stiker[]> {
    return this.http.get<Stiker[]>(this.baseUrl).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Stiker> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Stiker>(url).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  update(product: Stiker): Observable<Stiker> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Stiker>(url, product).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  deletProduct(id: string): Observable<Stiker> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Stiker>(url).pipe(
        map( obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMenssage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
