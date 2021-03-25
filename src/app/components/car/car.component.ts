import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded = false;
  currentCar:Car;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response => {this.cars = response.data});
    this.dataLoaded = true;
}

getCarsByBrand(brandId:number){
  this.carService.getCarsByBrand(brandId).subscribe(response => {
    this.cars = response.data,
    this.dataLoaded = true
  });
}

getCarsByColor(colorId:number){
  this.carService.getCarsByColor(colorId).subscribe(response => {
    this.cars = response.data,
    this.dataLoaded = true
  })
}

getCarClass(car:Car){
  if(car == this.currentCar){
    return "table-info cursorPointer"
  }else{
    return "cursorPointer"
  }
}

setCurrentCar(car:Car){
  this.currentCar=car;
}
}
