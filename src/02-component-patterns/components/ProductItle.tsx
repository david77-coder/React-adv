import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from "../styles/styles.module.css";


export const ProducTitle = ({title} : {title?: string}) => {
  const {product} = useContext(productContext);
  return (
    <span className={styles.productDescription}> {title ? title : product.title} </span>
  )
}
