import { useEffect, useState, useRef } from "react";
import { InicialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InicialValues
}

const useProducts = ( {onChange, product, value = 0, initialValues} :useProductArgs) => {

const [counter, setCounter] = useState<number>(initialValues?.count || value);


const isMounted = useRef(false)

const increaseBy = (value: number) => {
  debugger
    let newValue = Math.max(counter + value, 0)

    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount)
    }
    setCounter(newValue)
    // if(valorMaximo && newValue <= valorMaximo){
    // setCounter( newValue) ; 
    // }
    // else if(valorMaximo)
    // {
    //   setCounter(valorMaximo)
      
    // }
    // else{
    //   setCounter(newValue)
    // }

  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }


  useEffect(()=>{
    if(!isMounted.current) return;
    setCounter(value)
  },[value])

  useEffect(()=>{
    isMounted.current = true
    console.log(isMounted.current)
  },[])

        return {
            counter,
            increaseBy,
            isMaxCountReached: !!initialValues?.count && initialValues.count === counter,
            maxCount: initialValues?.maxCount ,
            reset
            
            
        }
}
export default useProducts;
