
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParkingsDataService } from '../services/parkings-data.service';

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.scss']
})
export class NewParkingComponent implements OnInit {

  showForm = false;

  constructor(private parkingDataService: ParkingsDataService) { }

  ngOnInit() {
  }

  onSubmit(myForm: any){
    const fields = myForm.form.controls;
    this.showForm = false;
    this.parkingDataService.addParking({
      nameParking: fields.nameParking.value,
      address: fields.address.value,
      manager: fields.manager.value,
      carsQuantity: fields.carsQuantity.value
    });
  }
}
