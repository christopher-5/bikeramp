import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from './trips.model';
import { GoogleService } from './google.service';

@Controller()
export class TripsController {
  constructor(
    private readonly TripsService: TripsService,
    private readonly GoogleService: GoogleService,
  ) {}
  @Post('test')
  distance(@Body() trip: Trip) {
    return this.GoogleService.calculateDistance(trip);
  }
  @Post('trips')
  create(@Body() trip: Trip) {
    return this.TripsService.create(trip);
  }
}
