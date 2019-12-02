import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';




const detailapiUrl = 'http://www.omdbapi.com?i=';
const listapiUrl = 'http://www.omdbapi.com/?s=game&type=movie';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

 public  Isdeg :boolean = false;
 data: MoviaList[] = [];

  constructor(private http: HttpClient) { }

  getMoviaList(page :number): Observable<MoviaList[]> {
    return this.http.get<MoviaList[]>(listapiUrl+"&page="+page)
      .pipe(
        tap(Movia => console.log('fetched moviaList')),
        catchError(this.handleError('getMoviaList', []))
      );
  }

  

  
  getMoviaDetail(i: string): Observable<MoviaDetail> {
    const url = `${detailapiUrl}${i}`;
    debugger;
    return this.http.get<MoviaDetail>(url).pipe(
      tap(_ => console.log(`fetched Movia id=${i}`)),
      catchError(this.handleError<MoviaDetail>(`getMovia id=${i}`))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
