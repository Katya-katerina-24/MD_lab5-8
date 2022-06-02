import { Component, OnInit } from '@angular/core';
import { ParkingsDataService } from '../services/parkings-data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

 cars!: any[];
 

  constructor(private parkingService: ParkingsDataService,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
  		params => this.getCars(params['prkId'])
  		);
  }


  getCars(numb: string) {
    const n = +numb;
  	this.parkingService.getCars(numb).subscribe(
  		(cars)=>{
  			this.cars = cars;
  		}
  	);
  }
}
