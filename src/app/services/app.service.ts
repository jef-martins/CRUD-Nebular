import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Banco } from '../models/banco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8081/";

  constructor(private http: HttpClient) { }


  getAllBanco():Observable<Banco[]>{
    return this.http.get<Banco[]>(this.url);
  }

  createBanco(request: Banco):Observable<any>{
    return this.http.post(this.url, request);
  }

  getOneBanco(id: number):Observable<Banco>{
    return this.http.get<Banco>(this.url+id);
  }

  update(id: number, request: Banco):Observable<Banco>{
    return this.http.put<Banco>(this.url+id, request);
  }

  delete(id: number):Observable<any>{
    return this.http.delete(this.url+id);
  }

}
