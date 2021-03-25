import { CarImage } from "./carImage";

export interface Car{
    id:number,
    modelYear:number,
    brandName:string,
    colorName:string,
    dailyPrice:number,
    description:string
    carImages : CarImage[];
    imagePath:string;
    colorId:number;
    brandId:number;    

}