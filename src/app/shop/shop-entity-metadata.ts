import {EntityMetadataMap} from '@ngrx/data'
import { ProductModel } from './product.model'
 
export const shopEntityMetadata: EntityMetadataMap = {
    Product:{
        selectId:(products: ProductModel) => products.productId
    }
}