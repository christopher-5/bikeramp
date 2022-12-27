import { Injectable } from '@nestjs/common';
import { Trip } from './trips.model';

@Injectable()
export class TripsService {
  insertRide(
    start_address: string,
    destination_address: string,
    distance: number,
    price: number,
    date: any,
  ) {
    const newRide = new Trip(
      start_address,
      destination_address,
      distance,
      price,
      date,
    );
    return newRide;
  }
}
