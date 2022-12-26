import { Body, Controller, Get, Post } from "@nestjs/common";
import { RidesService } from './rides.service';

@Controller('api')
export class RidesController {
  constructor(private readonly RidesService: RidesService) {}
  @Post('trips')
  addRide(
    @Body('start_address') startAddress: string,
    @Body('destination_address') destinationAddress: string,
    @Body('distance') distance: number,
    @Body('price') price: number,
    @Body('date') date: any,
  ) {
    const createdRide = this.RidesService.insertRide(
      startAddress, destinationAddress, distance, price, date
    );
    return createdRide;
  }

  @Get('stats/weekly')
  getWeeklyStats() {
    const weeklyStats = this.RidesService.getWeeklyStats();
    return weeklyStats;
  }
  @Get('stats/monthly')
  getMonthlyStats() {
    const monthlyStats = this.RidesService.getMonthlyStats();
    return monthlyStats;
  }
}
