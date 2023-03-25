import {Injectable} from '@nestjs/common';
import {ShopifyService} from "../shopify/shopify.service";

@Injectable()
export class AnalyticsService {
  constructor(private readonly shopifyService: ShopifyService) {
  }

  async findAll(): Promise<any> {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.report.list();
  }
}
