import { Injectable } from '@nestjs/common';
import { Ride } from './rides.model';

@Injectable()
export class RidesService {
  insertRide(
    start_address: string,
    destination_address: string,
    distance: number,
    price: number,
    date: any,
  ) {
    const newRide = new Ride(start_address, destination_address, distance, price, date);
    return newRide;
  }
}
