
import styles from "../styles/styles.module.css";
import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { productContext } from "./ProductCard";

// img = "" esto va a hacer que la imagen sea opcional
export const ProductImage = ({img = ''}) => {

  const {product} = useContext(productContext);
  let imgShow: string;

  if(img){
    imgShow = img;
  }else if(product.img){
    imgShow = product.img;  
  }else{
    imgShow = noImage;  
  }
  return (
    <img className={styles.productImg} src={imgShow} alt="Product Image" />
  )
} 
