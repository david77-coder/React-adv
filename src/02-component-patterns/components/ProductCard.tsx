import styles from "../styles/styles.module.css";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";

import {createContext} from "react";
import useProducts from "../hooks/useProducts";



//para inicializarlo vaico se puede tambien hacer esto 
//const productContext = createContext({} as ProductContextProps);
export const productContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: () => {},
  product: {id: '', title: ''}  
});
const { Provider } = productContext;  



export const ProductCard = ( {children, product}: ProductCardProps) => {
  const {counter, increaseBy} = useProducts()
    return (
      <Provider value={{
        counter,
        increaseBy,
        product
      }}>
          <div className={styles.productCard}>
            {children }
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Cofee" /> */}
            {/* <ProductImage img = {product.img} />
            <ProducTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
          </div>
      </Provider>
      )
}

