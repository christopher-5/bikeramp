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
    const newRide = new Ride(
      start_address,
      destination_address,
      distance,
      price,
      date,
    );
    return newRide;
  }
  getWeeklyStats() {
    const weeklyStats = {
      total_distance: '40km',
      total_price: '49.75PLN',
    };
    return weeklyStats;
  }
  getMonthlyStats() {
    const monthlyStats = [
      {
        day: 'July, 4th',
        total_distance: '12km',
        avg_ride: '4km',
        avg_price: '22.75PLN',
      },
      {
        day: 'July, 5th',
        total_distance: '3km',
        avg_ride: '3km',
        avg_price: '15.50PLN',
      },
    ];
    return monthlyStats;
  }
}
