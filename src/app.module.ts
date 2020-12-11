import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModule } from './base/base.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { VenderModule } from './vender/vender.module';
import { PaymentModule } from './payment/payment.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ItemModule } from './item/item.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { SalesrepModule } from './salesrep/salesrep.module';
import { TerritoryModule } from './territory/territory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BaseModule,
    UsersModule,
    RolesModule,
    VenderModule,
    PaymentModule,
    InvoiceModule,
    ItemModule,
    OrderModule,
    CustomerModule,
    SalesrepModule,
    TerritoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
