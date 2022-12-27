import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripEntity } from '../postgres/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripEntity])],
  controllers: [TripsController],
  providers: [TripsService],
})
export class TripsModule {}
