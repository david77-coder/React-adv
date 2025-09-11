import { useCallback, useContext } from "react"
import { productContext } from "./ProductCard"
import styles from "../styles/styles.module.css";


export interface PropsButtons {
    className?: string; 
    style?: React.CSSProperties

}


export const ProductButtons = ( {className, style}: PropsButtons) => {
  //TODO: Extrares de useContext una nueva propiedad que se llamara maxCount
const {counter, increaseBy, maxCount} = useContext(productContext)

// TODO: isMAxReached = useCallback, [count. maxCount]
// basado en el resultado de arriba devolver un true o false
// true si el count === maxCount
// false si no lo es
//basado en esto de arriba añadir nueva clase abajo

// const isMAxReached = (counter:number) => {
//   debugger
//   if(counter === valorMaximo){
//     return true
//   }else{
//     return false
//   }
// }

const isMAxReached = useCallback (
  () => !!maxCount && counter === maxCount,
  [counter, maxCount]
)


  return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button 
            className={styles.buttonMinus}
            onClick={ () => increaseBy(-1) }>-</button>
            <div className={styles.countLabel}> {counter} </div>     
            <button 
               className={`${styles.buttonAdd} ${isMAxReached()? styles.disabled : "" }`}
                onClick={ () => increaseBy(+1) }> + </button>
         </div>
  )
}
  
