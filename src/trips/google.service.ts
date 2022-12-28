import { Injectable } from '@nestjs/common';
import { Trip } from './trips.model';
import axios from 'axios';
import * as process from 'process';
import { RequestBody } from './requestBody.model';

@Injectable()
export class GoogleService {
  async calculateDistance(requestBody: RequestBody) {
    const newURL = new URL(
      'https://maps.googleapis.com/maps/api/distancematrix/json',
    );
    newURL.searchParams.append('destinations', requestBody.destination_address);
    newURL.searchParams.append('origins', requestBody.start_address);
    newURL.searchParams.append('key', process.env.GOOGLE_APIKEY);
    return await axios(newURL.href).then(
      (response) => response.data.rows[0].elements[0].distance.value,
    );
  }
}
