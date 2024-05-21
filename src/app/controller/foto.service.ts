import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from '../model/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private vHttp: HttpClient) { }

  findAll():Observable<Foto[]> {
    return this.vHttp.get<Foto[]>('https://jsonplaceholder.typicode.com/photos');
  }

  findById(pFotoId: number):Observable<Foto> {
    return this.vHttp.get<Foto>('https://jsonplaceholder.typicode.com/photos/'+pFotoId);
  }
}
