import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponeModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl ="https://localhost:44320/api/colors/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newUrl= this.apiUrl+'getall';
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
  getColorById(id: number): Observable<ListResponseModel<Color>> {
    let newUrl = this.apiUrl+'getcolorbyid'+id
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }

}
