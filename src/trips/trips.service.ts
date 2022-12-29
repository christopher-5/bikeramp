import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripEntity } from '../postgres/trip.entity';
import { Repository } from 'typeorm';
import { Trip } from '../types/types';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(TripEntity)
    private tripRepository: Repository<TripEntity>,
  ) {}
  create(trip: Trip) {
    const newTrip = this.tripRepository.create(trip);
    return this.tripRepository.save(newTrip);
  }
}
