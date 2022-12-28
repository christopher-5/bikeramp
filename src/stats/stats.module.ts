import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { TripEntity } from '../postgres/trip.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TripEntity])],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
