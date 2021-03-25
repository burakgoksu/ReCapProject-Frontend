import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponeModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl ="https://localhost:44320/api/customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newUrl = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newUrl);
  }
  

}
