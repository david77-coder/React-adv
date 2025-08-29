import styles from "../styles/styles.module.css";
import { Product, ProductCardProps, ProductContextProps } from "../interfaces/interfaces";

import {createContext, ReactElement} from "react";
import useProducts from "../hooks/useProducts";



//para inicializarlo vaico se puede tambien hacer esto 
//const productContext = createContext({} as ProductContextProps);
export const productContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: () => {},
  product: {id: '', title: ''}  
});
const { Provider } = productContext;  

export interface Props {
  product: Product, 
  children?: ReactElement | ReactElement[],
  className?: string,

}


export const ProductCard = ( {children, product, className, style}: ProductCardProps) => {
  const {counter, increaseBy} = useProducts()
    return (
      <Provider value={{
        counter,
        increaseBy,
        product
      }}>
          <div className={`${styles.productCard} ${className}`} style={style}>
            {children }
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Cofee" /> */}
            {/* <ProductImage img = {product.img} />
            <ProducTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
          </div>
      </Provider>
      )
}

