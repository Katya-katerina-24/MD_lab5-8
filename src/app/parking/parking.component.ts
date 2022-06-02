import { Component, EventEmitter, Input, 
  OnInit, Output } from '@angular/core';
import { ParkingsDataService } from 'src/app/services/parkings-data.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  @Input() parking: any;
  @Input() prkIndex!: number;
  
  showInfo =false;

  constructor(private parkingDataService: ParkingsDataService) { }

  ngOnInit() {
  }

  delParking () {
    this.parkingDataService.deleteParking(this.prkIndex);
  }

}
