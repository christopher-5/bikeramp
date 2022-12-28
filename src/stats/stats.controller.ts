import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly StatsService: StatsService) {}
  @Get('weekly')
  getWeeklyStats() {
    return this.StatsService.getWeeklyStats().then((data) => data[0]);
  }
  @Get('monthly')
  getMonthlyStats() {
    return this.StatsService.getMonthlyStats();
  }
}
