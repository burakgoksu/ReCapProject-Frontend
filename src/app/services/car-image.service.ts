import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponeModel';


@Injectable({
  providedIn: 'root'
})

export class CarImageService {

  apiUrl= "https://localhost:4200/api/";

  constructor(private httpClient:HttpClient) { }
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
