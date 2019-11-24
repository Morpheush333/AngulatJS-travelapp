import { Component, OnInit } from '@angular/core';
import { Trip } from '../domain/trip';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Catering } from '../domain/catering.enum';

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.scss']
})
export class TripCreateComponent implements OnInit {

  // public adultPlacesAvailable:number;
  public trip: Trip;
  public caterings: Catering[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.trip = new Trip();
    this.trip.adultAvailable = 10;
    this.caterings = Object.keys(Catering)
    .map(key => Catering[key])
    .filter(value => typeof value !== 'number');
  }

  // change(){
  //   console.log(this.adultPlacesAvailable);
  // }

  save() {
    console.log(this.trip);
    this.http.post('http://localhost:8080/trips' , this.trip)
    .subscribe(response => {
      console.log(response);
      this.router.navigate(['trips'])
    });
  }

  back() {
    this.router.navigate(['']);
  }

  getCateringLabel(catering){
    let label: string;  
    switch (catering){
      
      case catering.BB: 
        label = 'Bed & Breakfest';
        break;
      
      case Catering.AI: 
        label = 'All include';
        break;
      
      case Catering.HB: 
        label = 'Half board';
        break;
      
      case Catering.FB: 
        label = 'Full Borard';
        break;
      
      case Catering.OV: 
        label = 'Over-Night';
        break;
      
      case Catering.SC: 
        label = 'Self Catering';
        break;
      
      case Catering.PP: 
        label = 'program package';
        break;
      default:
        label = '';
        break;

      }
      return label;
  }

}
