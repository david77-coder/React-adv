import { useState } from "react";
import { Product, ProductsInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
     
    const [shoppingCart, setshoppingCart] =  useState<{ [key: string]: ProductsInCart }>({});

    const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
        //  console.log("evento es: ", count, product)

        console.log({count})
        setshoppingCart( oldShoppingCart => {
            
            if(count === 0){
              const  {[product.id]: toDelete, ...rest } = oldShoppingCart
                return {
                  ...rest
              }
            }
            return {
              ...oldShoppingCart,
              [product.id]: {...product, count}
            }

        })
    }

    return {
        onProductCountChange,
        shoppingCart

    }

}
