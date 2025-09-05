import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProducTitle } from './ProductItle';

// Creamos el HOC tipado correctamente
const ProductCard = ProductCardHoc as ProductCardHOCProps;

ProductCard.Image = ProductImage;
ProductCard.Title = ProducTitle;
ProductCard.Buttons = ProductButtons;

export { ProductCard };
export default ProductCard;
