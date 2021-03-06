import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponeModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl ="https://localhost:44320/api/rentals/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newUrl = this.apiUrl + 'getallrentaldetails';
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

}
