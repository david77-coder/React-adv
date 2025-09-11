


import { ProductImage } from '../components/ProductImage';  
import { ProducTitle } from '../components/ProductItle';
import { ProductButtons } from '../components/ProductButtons';
import ProductCard from '../components/index';
import '../styles/custom-styles.css';
import { products } from '../data/products';


const product = products[0]

export const ShoppingPage = () => {





  return (

    <div className='bg-dark'>
        <h1>Shopping store</h1>
       
        <hr />
            <ProductCard 
              key={ product.id  }
              product={ product }
              className="bg-dark text-white"
              //tengo que asegurarme que estos cambios no rompan mi codigo
              initialValues = {{
                count: 4,
                maxCount:10
              }}
            
              
              
            >
              {
                 ( {reset, count, increaseBy, isMaxCountReached, maxCount} ) => (
                
                  <>
                <ProductImage className="custom-img" />
                <ProducTitle className="text-bold" />
                <ProductButtons  className="custom-buttons" style={ { backgroundColor: 'green'} } />
                 {/* <button onClick={ reset }>Reset</button> */}

                <button onClick={reset}>Reset</button>
                 
                <button onClick={() => increaseBy(-2)}>-2</button>
                 {
                  (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button> )
                 }
             
                <span> { count } - { maxCount} </span>
                </>
                 )
              }
            </ProductCard>
    </div>
  ) }

