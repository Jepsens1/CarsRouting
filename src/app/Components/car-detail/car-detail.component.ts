import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  editCarForm: FormGroup;
  constructor(private apiService: RestAPIService,private route : ActivatedRoute, private router: Router){

    this.editCarForm = new FormGroup({
      rank: new FormControl(this.car?.rank,[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      model: new FormControl('',[Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      changeQuantityPercent: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")])
    });
    }
  ngOnInit()
  {
    //Gets the car by the url query params
    const id = this.route.snapshot.paramMap.get('model');
    this.apiService.getCar(id!).subscribe(car => this.car = car)
    
  }
  editCar()
  {
    //Calls api with form data
    this.apiService.editCar(this.editCarForm.get('rank')!.value,this.editCarForm.get('model')!.value,this.editCarForm.get('quantity')!.value,this.editCarForm.get('changeQuantityPercent')!.value)
    .subscribe(s => console.log(s));
    this.router.navigate(["cars"]);
  }
  deleteCar()
  {
    //Calls api delete
    this.apiService.deleteCar(this.car!.model!).subscribe(text => console.log(text));
    //Redirects to cars page
    this.router.navigate(['cars']);
  }
}
