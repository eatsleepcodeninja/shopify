import {Module} from '@nestjs/common';
import {AnalyticsController} from "./analytics.controller";
import {AnalyticsService} from "./analytics.service";
import {ShopifyService} from "../shopify/shopify.service";
import {ConfigService} from "@nestjs/config";

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService, ShopifyService, ConfigService]
})
export class AnalyticsModule {
}
