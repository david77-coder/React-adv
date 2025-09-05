import { ReactElement } from "react"
import { Props as ProductTitleProds} from "../components/ProductItle"
import { PropsImg } from "../components/ProductImage"
import {PropsButtons} from "../components/ProductButtons"



export interface ProductCardProps {
  product: Product, 
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: React.CSSProperties,
  value?:number,
  onChange?: (args:{product:Product, count: number}) => void

}


export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number 
  product: Product,
  increaseBy: (value: number) => void
}


export interface ProductCardHOCProps {
  ( { children, product }: ProductCardProps ): JSX.Element  ,
  Image:   ( props:PropsImg ) => JSX.Element,
  Title:   ( props: ProductTitleProds ) => JSX.Element,
  Buttons: ( props: PropsButtons) => JSX.Element,
}

export interface onChangeArgs{
  product:Product, 
  count: number
}

export interface ProductsInCart extends Product {
  count: number 
}
