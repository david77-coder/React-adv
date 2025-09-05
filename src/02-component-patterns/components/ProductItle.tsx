import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  title? :string,
  className?: string,
  numero?: number,
  style?: React.CSSProperties

} 



export const ProducTitle = ( {title, className,style}:Props) => {
  const {product} = useContext(productContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className} `}> {title ? title : product.title}  </span>
  )
}
