import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Database } from '../types/types';

@Entity(Database.TABLE_NAME)
export class TripEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  start_address: string;
  @Column()
  destination_address: string;
  @Column({
    name: 'distance',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  distance: number;
  @Column({
    name: 'price',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;
  @Column({ type: 'date' })
  date: Date;
}
