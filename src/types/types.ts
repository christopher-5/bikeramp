export interface WeeklyStatsInterface {
  total_distance: number;
  total_price: number;
}

export interface MonthlyStatsInterface {
  date: Date;
  total_distance: number;
  avg_ride: number;
  avg_price: number;
}

export class RequestBody {
  constructor(
    public start_address: string,
    public destination_address: string,
    public price: number,
    public date: Date,
  ) {}
}
export class Trip extends RequestBody {
  constructor(
    public start_address: string,
    public destination_address: string,
    public distance: number,
    public price: number,
    public date: Date,
  ) {
    super(start_address, destination_address, price, date);
  }
}

export enum Database {
  TABLE_NAME = 'trips',
  TYPE = 'postgres',
}
export enum GoogleApi {
  URL = 'https://maps.googleapis.com/maps/api/distancematrix/json',
  DESTINATIONS_PARAM = 'destinations',
  ORIGINS_PARAM = 'origins',
  API_KEY_PARAM = 'key',
}

export enum Endpoints {
  GLOBAL_PREFIX = 'api',
  STATS_CONTROLLER = 'stats',
  WEEKLY_STATS = 'weekly',
  MONTHLY_STATS = 'monthly',
  ADD_TRIP = 'trips',
}

export const weeklyStatsQuery = `SELECT SUM(distance) AS total_distance, SUM(price) AS total_price FROM ${Database.TABLE_NAME} WHERE date BETWEEN date_trunc('week', CURRENT_TIMESTAMP) AND CURRENT_TIMESTAMP;`;
export const monthlyStatsQuery = `SELECT date, ROUND(SUM(distance), 2) AS total_distance, ROUND(AVG(distance), 2) AS avg_ride, ROUND(AVG(price), 2) AS avg_price FROM ${Database.TABLE_NAME} WHERE date BETWEEN date_trunc('month', CURRENT_TIMESTAMP) AND CURRENT_TIMESTAMP GROUP BY date ORDER BY date;`;
