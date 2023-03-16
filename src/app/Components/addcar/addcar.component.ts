import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  addCarForm: FormGroup;
  constructor(private api: RestAPIService, private location: Location)
  {
    this.addCarForm = new FormGroup({
      rank: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      model: new FormControl('',[Validators.required, Validators.minLength(4)]),
      quantity: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      changeQuantityPercent: new FormControl('',[Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")])
    });
  }
  addCar()
  {
    this.api.addCar(this.addCarForm.get('rank')!.value,this.addCarForm.get('model')!.value,this.addCarForm.get('quantity')!.value,this.addCarForm.get('changeQuantityPercent')!.value)
    .subscribe(s => console.log(s));
    this.location.back();
  }
}
