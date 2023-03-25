import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AnalyticsService} from './analytics/analytics.service';
import {AnalyticsController} from './analytics/analytics.controller';
import {AnalyticsModule} from './analytics/analytics.module';
import {ShopifyService} from './shopify/shopify.service';
import {ProductsService} from './products/products.service';
import {ProductsModule} from './products/products.module';
import {ShopifyModule} from './shopify/shopify.module';

@Module({
  imports: [ConfigModule.forRoot(), AnalyticsModule, ProductsModule, ShopifyModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, ShopifyService, ProductsService, ConfigService],
})
export class AppModule {
}
