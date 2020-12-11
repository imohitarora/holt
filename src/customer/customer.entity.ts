import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base/base.entity';

@Entity({ name: 'customer' })
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'customer_number' })
  id!: number;

  @Column({ name: 'customer_name', type: 'varchar', length: 300 })
  customerName: string;

  @Column({ name: 'address_line_1', type: 'varchar', length: 300 })
  addLine1: string;

  @Column({ name: 'address_line_2', type: 'varchar', length: 300 })
  addLine2: string;

  @Column({ name: 'customer_city', type: 'varchar', length: 300 })
  city: string;

  @Column({ name: 'customer_state', type: 'varchar', length: 300 })
  state: string;

  @Column({ name: 'zip_code', type: 'varchar', length: 300 })
  zip: string;
}
