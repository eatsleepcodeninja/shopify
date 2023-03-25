import {Module} from '@nestjs/common';
import {ProductsController} from './products.controller';
import {ProductsService} from "./products.service";
import {ShopifyService} from "../shopify/shopify.service";
import {ConfigService} from "@nestjs/config";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ShopifyService, ConfigService]
})
export class ProductsModule {
}
