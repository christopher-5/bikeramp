import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripEntity } from '../postgres/trip.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { StatsInterface } from '../postgres/stats.interface';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(TripEntity)
    private tripRepository: Repository<TripEntity>,
  ) {}
  getWeeklyStats(): Promise<StatsInterface> {
    return this.tripRepository.query(
      "SELECT SUM(distance) AS total_distance, SUM(price) AS total_price FROM trips2 WHERE date BETWEEN date_trunc('week', CURRENT_TIMESTAMP) AND CURRENT_TIMESTAMP;",
    );
  }
  getMonthlyStats() {
    return this.tripRepository.query(
      "SELECT date, ROUND(SUM(distance), 2) AS total_distance, ROUND(AVG(distance), 2) AS avg_ride, ROUND(AVG(price), 2) AS avg_price FROM trips2 WHERE date BETWEEN date_trunc('month', CURRENT_TIMESTAMP) AND CURRENT_TIMESTAMP GROUP BY date ORDER BY date;",
    );
  }
}
