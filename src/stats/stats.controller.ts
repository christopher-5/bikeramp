import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';
import { MonthlyStatsInterface, WeeklyStatsInterface } from '../types/types';

@Controller('stats')
export class StatsController {
  constructor(private readonly StatsService: StatsService) {}
  @Get('weekly')
  getWeeklyStats(): Promise<WeeklyStatsInterface> {
    return this.StatsService.getWeeklyStats().then((data) => data[0]);
  }
  @Get('monthly')
  getMonthlyStats(): Promise<MonthlyStatsInterface[]> {
    return this.StatsService.getMonthlyStats();
  }
}
