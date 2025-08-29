
import { ProductCardProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHoc} from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProducTitle } from './ProductItle';

import {ProductCardHOCProps} from '../interfaces/interfaces';

// export const ProductCard ={
//     ...ProductCardHoc,
//     Image: ProductImage,
//     Title: ProducTitle, 
//     Buttons: ProductButtons
// }

export const ProductCard:ProductCardHOCProps = Object.assign( ProductCardHoc, {
    Image: ProductImage,    
    Title: ProducTitle,
    Buttons: ProductButtons
} );

export interface ProductCardHOCMain {
    ( { children, product }: ProductCardProps ): JSX.Element,   
     Image: typeof ProductImage;
    Title: typeof ProducTitle;
    Buttons: typeof ProductButtons;
}   


export default ProductCard;





