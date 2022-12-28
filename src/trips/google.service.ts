import { Injectable } from '@nestjs/common';
import { Trip } from './trips.model';
import axios from 'axios';
import * as process from 'process';

@Injectable()
export class GoogleService {
  async calculateDistance(trip) {
    const newURL = new URL(
      'https://maps.googleapis.com/maps/api/distancematrix/json',
    );
    newURL.searchParams.append('destinations', trip.destination_address);
    newURL.searchParams.append('origins', trip.start_address);
    newURL.searchParams.append('key', process.env.GOOGLE_APIKEY);
    return await axios(newURL.href).then(
      (response) => response.data.rows[0].elements[0].distance.value,
    );
  }
}
