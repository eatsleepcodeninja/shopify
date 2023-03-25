import {Injectable} from '@nestjs/common';
import {ShopifyService} from "../shopify/shopify.service";
import {CreateProductDto, UpdateProductDto} from "./dto";

@Injectable()
export class ProductsService {
  constructor(private readonly shopifyService: ShopifyService) {
  }

  async findAll() {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.product.list();
  }

  async findOne(id: number) {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.product.get(id)
  }

  async create(productData: CreateProductDto) {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.product.create(productData)
  }

  async update(id, productData: UpdateProductDto) {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.product.update(id, productData)
  }
  async delete(id) {
    const shopify = this.shopifyService.getShopifyApi();
    return await shopify.product.delete(id)
  }

}
