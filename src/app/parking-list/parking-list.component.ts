import { Component, OnInit } from '@angular/core';
import { ParkingsDataService } from '../services/parkings-data.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss']
})
export class ParkingListComponent implements OnInit {

  parkings!: any[];

  constructor(private parkingService: ParkingsDataService) {
    parkingService.getParkings().subscribe(
    (parkings) => this.parkings = parkings
    );
  }

  ngOnInit():void {
    
  }
}


