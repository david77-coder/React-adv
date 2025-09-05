import styles from "../styles/styles.module.css";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";

import {createContext, ReactElement} from "react";
import useProducts from "../hooks/useProducts";



//para inicializarlo vaico se puede tambien hacer esto 
//const productContext = createContext({} as ProductContextProps);
export const productContext = createContext<ProductContextProps>({
  counter: 0,
  increaseBy: () => {},
  product: {id: '', title: ''},

});
const { Provider } = productContext;  

export interface Props {
  product: Product, 
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args:onChangeArgs) => void,
  value?: number
}

// export interface onChangeArgs{
//   product:Product, 
//   count: number
// }

export const ProductCard = ( {children, product, className, style, onChange, value}: Props) => {
  const {counter, increaseBy} = useProducts({onChange, product, value});
   
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

