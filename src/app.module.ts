import { Module } from '@nestjs/common';
import { TripsModule } from './trips/trips.module';
import { StatsModule } from './stats/stats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { TripEntity } from './postgres/trip.entity';
import { Database } from './types/types';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: Database.TYPE,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      entities: [TripEntity],
      ssl: { rejectUnauthorized: false },
    }),
    TripsModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
