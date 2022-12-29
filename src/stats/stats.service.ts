import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripEntity } from '../postgres/trip.entity';
import { Repository } from 'typeorm';
import { monthlyStatsQuery, weeklyStatsQuery } from '../types/types';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(TripEntity)
    private tripRepository: Repository<TripEntity>,
  ) {}
  getWeeklyStats() {
    return this.tripRepository.query(weeklyStatsQuery);
  }
  getMonthlyStats() {
    return this.tripRepository.query(monthlyStatsQuery);
  }
}
