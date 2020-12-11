import { Column } from 'typeorm';

export abstract class BaseEntity {
  @Column({ name: 'mtd_sales', type: 'numeric', precision: 10, scale: 2 })
  mtdSales: number;

  @Column({ name: 'ytd_sales', type: 'numeric', precision: 10, scale: 2 })
  ytdSales: number;

  @Column({ name: 'mtd_commission', type: 'numeric', precision: 10, scale: 2 })
  mtdCommission: number;

  @Column({ name: 'ytd_commission', type: 'numeric', precision: 10, scale: 2 })
  ytdCommission: number;

  @Column({ name: 'commission_rate', type: 'numeric', precision: 10, scale: 2 })
  commissionRate: number;
}
