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
  async getWeeklyStats(): Promise<WeeklyStatsInterface> {
    return await this.StatsService.getWeeklyStats().then((data) => data[0]);
  }
  @Get(Endpoints.MONTHLY_STATS)
  async getMonthlyStats(): Promise<MonthlyStatsInterface[]> {
    return await this.StatsService.getMonthlyStats();
  }
}
