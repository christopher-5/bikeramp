import { Body, Controller, Post } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from './trips.model';

@Controller()
export class TripsController {
  constructor(private readonly TripsService: TripsService) {}
  @Post('trips')
  create(@Body() trip: Trip) {
    return this.TripsService.create(trip);
  }
}
