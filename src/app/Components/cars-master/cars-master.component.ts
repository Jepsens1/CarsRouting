import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-cars-master',
  templateUrl: './cars-master.component.html',
  styleUrls: ['./cars-master.component.css']
})
export class CarsMasterComponent implements OnInit{

  cars: Car[] | undefined;
  constructor(private router: Router, private apiService: RestAPIService, private auth: AuthenticationService)
  {

  }
  ngOnInit()
  {
    this.apiService.getAllCars().subscribe(carsapi => this.cars = carsapi);
  }
  editCar(car: Car)
  {
    this.router.navigate(['car/', car.model])
  }
  logout()
  {
    this.auth.logout();
    this.router.navigate(['login']);
  }
  addCar()
  {
    this.router.navigate(["addcar"]);
  }

}
