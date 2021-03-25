import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponeModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl =environment.apiURL +'brands/';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newUrl = this.apiUrl+'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

  getBrandById(BrandId: number): Observable<ListResponseModel<Brand>> {
    let newUrl = this.apiUrl+'getbrandbyid?brandId='+BrandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }
}
