import { useState } from "react";
import { Product, ProductsInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
     
    const [shoppingCart, setshoppingCart] =  useState<{ [key: string]: ProductsInCart }>({});

    const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
        //  console.log("evento es: ", count, product)

        setshoppingCart( oldShoppingCart => {
            

            const productIntCart:ProductsInCart = oldShoppingCart[product.id] || {...product, count:0}

            if(Math.max(productIntCart.count + count, 0) > 0){
            productIntCart.count += count;
            return {
                ...oldShoppingCart,
                [product.id]:productIntCart
            }
            }
            //borrar el producto
            const  {[product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

        })
    }

    return {
        onProductCountChange,
        shoppingCart

    }

}
