import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as process from 'process';
import { GoogleApi, RequestBody } from '../types/types';

@Injectable()
export class GoogleService {
  calculateDistance(requestBody: RequestBody) {
    const newURL = new URL(GoogleApi.URL);
    newURL.searchParams.append(
      GoogleApi.DESTINATIONS_PARAM,
      requestBody.destination_address,
    );
    newURL.searchParams.append(
      GoogleApi.ORIGINS_PARAM,
      requestBody.start_address,
    );
    newURL.searchParams.append(
      GoogleApi.API_KEY_PARAM,
      process.env.GOOGLE_APIKEY,
    );
    return axios(newURL.href).then(
      (response) => response.data.rows[0].elements[0].distance.value,
    );
  }
}
