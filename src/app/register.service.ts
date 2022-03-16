import { Injectable } from '@angular/core';
import { Customer } from './customer';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(customer:Customer) : Observable<String>{
    let url="http://localhost:8181/register.api"
    return this.http.post<string>(url,customer);
  }
}
