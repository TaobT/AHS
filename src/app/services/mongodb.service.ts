import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const inputdataUrl = 'http://localhost:8080/api/inputdata';
const ahysUrl = 'http://localhost:8080/api/ahys';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private http: HttpClient) { }

  getAllAHyS(): Observable<any>{
    return this.http.get(ahysUrl);
  }
  
  createInputData(data: any): Observable<any>{
    return this.http.post(inputdataUrl, data);
  }
}
