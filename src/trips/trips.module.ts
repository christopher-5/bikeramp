import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripEntity } from '../postgres/trip.entity';
import { GoogleService } from './google.service';

@Module({
  imports: [TypeOrmModule.forFeature([TripEntity])],
  controllers: [TripsController],
  providers: [TripsService, GoogleService],
})
export class TripsModule {}
