import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {


  trips: Trip[];
  tripsResponse: any;
  displayedColumns: string[] = ['id', 'dateStart', 'dateFinnish'];

  // http: HttpClient;

  // constructor(http: HttpClient) {
  //   this.http = http;
  //  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.trips = [];
    // this.trips.push(new Trip(1,"name",12,'2019-10-01','2019-10-13'));
    // this.trips.push(new Trip(2,"anglia",8,'2019-10-01','2019-10-13'));
    // this.trips.push(new Trip(3,"rumunia#",10,'2019-10-01','2019-10-13'));
    // this.trips.push(new Trip(4,"albanioa",16,'2019-10-01','2019-10-13'));
    // this.trips.push(new Trip(5,"arabioza",11,'2019-10-01','2019-10-13'));

    this.http.get<Trip[]>('http://localhost:8080/trips')
      .subscribe(response => {
        // let Trip = new Trip ;
        this.trips = response;
        console.log(response);
      });

      



      console.log('LOL');
  }

}
