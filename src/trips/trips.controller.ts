import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripsService } from './trips.service';
import { GoogleService } from './google.service';
import { Endpoints, RequestBody, Trip } from '../types/types';

@Controller()
export class TripsController {
  constructor(
    private readonly TripsService: TripsService,
    private readonly GoogleService: GoogleService,
  ) {}

  @Post(Endpoints.ADD_TRIP)
  async create(@Body() body: RequestBody) {
    const calculatedDistance = await this.GoogleService.calculateDistance(body);
    const newTrip = new Trip(
      body.start_address,
      body.destination_address,
      Math.round(calculatedDistance / 10) / 100,
      body.price,
      body.date,
    );
    return await this.TripsService.create(newTrip);
  }
}
