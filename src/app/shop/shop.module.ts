import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './products/products.component';
import { EntityDefinitionService } from '@ngrx/data';
import { shopEntityMetadata } from './shop-entity-metadata';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { 
  constructor(rntityDefService: EntityDefinitionService){
    rntityDefService.registerMetadataMap(shopEntityMetadata)
  }
}
