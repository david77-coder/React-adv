import styles from "../styles/styles.module.css";
import { InicialValues, onChangeArgs, Product, ProductCardHanlers, ProductContextProps } from '../interfaces/interfaces';

import {createContext} from "react";
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
  // children?: ReactElement | ReactElement[],
  children: (args:ProductCardHanlers) => JSX.Element,
  className?: string,
  style?: React.CSSProperties,
  onChange?: (args:onChangeArgs) => void,
  value?: number,
  initialValues?: InicialValues
}

// export interface onChangeArgs{
//   product:Product, 
//   count: number
// }

export const ProductCard = ( {children, product, className, style, onChange, value, initialValues}: Props) => {
  //useProducts es quien maneja el estado
  const {counter, increaseBy, maxCount, reset, isMaxCountReached} = useProducts({onChange, product, value, initialValues});
   
  return (
      <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}>
          <div className={`${styles.productCard} ${className}`} style={style}>
            { 
            children({
              count: counter,
              isMaxCountReached:isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product: product,
              increaseBy:increaseBy,
              reset,
            }) }
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Cofee" /> */}
            {/* <ProductImage img = {product.img} />
            <ProducTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
          </div>
      </Provider>
      )
}

