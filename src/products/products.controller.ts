import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ProductsService} from "./products.service";
import {CreateProductDto, UpdateProductDto} from "./dto";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  index() {
    return this.productsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id)
  }

  @Post()
  create(@Body() productData: CreateProductDto) {
    return this.productsService.create(productData)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() productData: UpdateProductDto) {
    return this.productsService.update(+id, productData)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id)
  }

}
