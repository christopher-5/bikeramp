import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';
@Controller('stats')
export class StatsController {
  constructor(private readonly StatsService: StatsService) {}
  @Get('weekly')
  getWeeklyStats() {
    const weeklyStats = this.StatsService.getWeeklyStats();
    return weeklyStats;
  }
  @Get('monthly')
  getMonthlyStats() {
    const monthlyStats = this.StatsService.getMonthlyStats();
    return monthlyStats;
  }
}
