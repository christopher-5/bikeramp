import { Module } from '@nestjs/common';
import { RidesModule } from './rides/rides.module';

@Module({
  imports: [RidesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
