import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ParkingsDataService {

  private parkings = [
    {
      nameParking: 'Lucky',
      address: 'вул.Маріупольська 30а',
      manager: 'Ткаченко І.В.',
      carsQuantity: 22
    },
    {
      nameParking: 'Dream',
      address: 'вул.Північна 24',
      manager: 'Бабенко Т.І.',
      carsQuantity: 20
    },
  ];

  private cars = [
    {name: 'Toyota Rav4', namePark: "Lucky"},
    {name: 'Toyota Camry', namePark: "Lucky"},
    {name: 'Skoda Octavia', namePark: "Lucky"},
    {name: 'Volkswagen Passat', namePark: "Dream"},
    {name: 'Tesla Model S', namePark: "Dream"},
    {name: 'Skoda Kodiaq', namePark: "Dream"},
  ];

  constructor() { }

  getCars (nameParking: string): Observable<any[]> {
     return new Observable<any[]>(
      subscriber => {
        subscriber.next(this.cars.filter(elem=>{
      return elem.namePark === nameParking;
    }));
        subscriber.complete();
      }
      );
  }

  

 

  getParkings():Observable<any[]>{
    return new Observable<any[]>(
      subscriber=>{
        subscriber.next(this.parkings);
        subscriber.complete();
      }
    );
  }

  addParking (parking: any) {
    this.parkings.push(parking);
  }

  deleteParking (index: number) {
    this.parkings.splice(index, 1);
  }
}
