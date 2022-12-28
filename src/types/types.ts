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
