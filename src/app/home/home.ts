import { Component, signal } from '@angular/core';
import axios from 'axios';
import { FlightModel } from '../../models/flight.models';

@Component({
  selector: 'app-home',
  standalone: true, // Assuming this is a standalone component
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  flights = signal<FlightModel[]>([]);

  constructor() {
    axios.get<FlightModel[]>('https://flight.pequla.com/api/flight/list?type=departure')
      .then(rsp => {
        // Access the data property of the response and set the signal value
        this.flights.set(rsp.data);
      })
      .catch(error => {
        console.error('Error fetching flights:', error); // Good practice to handle errors
      });
  }
}
