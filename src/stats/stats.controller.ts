import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';
import {
  Endpoints,
  MonthlyStatsInterface,
  WeeklyStatsInterface,
} from '../types/types';

@Controller(Endpoints.STATS_CONTROLLER)
export class StatsController {
  constructor(private readonly StatsService: StatsService) {}
  @Get(Endpoints.WEEKLY_STATS)
  getWeeklyStats(): Promise<WeeklyStatsInterface> {
    return this.StatsService.getWeeklyStats().then((data) => data[0]);
  }
  @Get(Endpoints.MONTHLY_STATS)
  getMonthlyStats(): Promise<MonthlyStatsInterface[]> {
    return this.StatsService.getMonthlyStats();
  }
}
