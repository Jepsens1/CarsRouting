import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  url: string = "https://localhost:7263"
  constructor(private http: HttpClient) { }
  //This Service class is used to call api endpoints
  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url+'/Cars/GetAll');
  }
  getCar(model: string): Observable<Car> {
    const url = this.url + `/Cars/Get?model=${model}`;
    return this.http.get<Car>(url);
  }
  deleteCar(model: string): Observable<string> {
    const url = this.url + `/Cars/Delete?model=${model}`;
    return this.http.delete<string>(url);
  }
  addCar(rankform: number, modelform:string, quantityform: number, changeQuantityPercentform: number) : Observable<string>
  {
    const url = this.url + `/Cars/Add?rank=${rankform}&model=${modelform}&quantity=${quantityform}&changeQuantity=${changeQuantityPercentform}`;
    return this.http.post<string>(url,'');
  }
  editCar(rankform: number, modelform:string, quantityform: number, changeQuantityPercentform: number) : Observable<string>
  {
    const url = this.url + `Update?rank=${rankform}&model=${modelform}&quantity=${quantityform}&changeQuantity=${changeQuantityPercentform}`;
    return this.http.post<string>(url, '');
  }
}
