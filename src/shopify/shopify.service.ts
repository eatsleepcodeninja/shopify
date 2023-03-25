import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

const Shopify = require('shopify-api-node');

@Injectable()
export class ShopifyService {
  constructor(private configService: ConfigService) {
  }

  getShopifyApi() {
    return new Shopify({
      shopName: this.configService.get<string>('SHOPNAME'),
      apiKey: this.configService.get<string>('APIKEY'),
      password: this.configService.get<string>('APIPASSWORD'),
    })
  }

}
