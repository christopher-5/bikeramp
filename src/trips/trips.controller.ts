import { Body, Controller, Post } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller()
export class TripsController {
  constructor(private readonly TripsService: TripsService) {}
  @Post('trips')
  addRide(
    @Body('start_address') startAddress: string,
    @Body('destination_address') destinationAddress: string,
    @Body('distance') distance: number,
    @Body('price') price: number,
    @Body('date') date: any,
  ) {
    const createdRide = this.TripsService.insertRide(
      startAddress,
      destinationAddress,
      distance,
      price,
      date,
    );
    return createdRide;
  }
}
