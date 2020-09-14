import {environment} from "../../environments/environment";
import { IAwesome } from './../iawesome';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<IAwesome>
  {
    return this.http.get<IAwesome>(environment.apiUrl)
  }
  addAwesome(awesome: Partial<IAwesome>): Observable<IAwesome>
  {
    return this.http.post<IAwesome>(environment.apiUrl, awesome);
  }
  delete(id: number)
  {
    return this.http.delete(environment.apiUrl + '/'+id);
  }
  getAwesomeById(id: number): Observable<IAwesome>
  {
    return this.http.get<IAwesome>(environment.apiUrl+ '/'+id);
  }
  updateAwesome(awesome: any, id: number): Observable<IAwesome>
  {
    return this.http.put<IAwesome>(environment.apiUrl+ '/'+ id, awesome);
  }
}
