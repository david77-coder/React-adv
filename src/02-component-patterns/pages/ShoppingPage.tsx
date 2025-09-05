


import { ProductImage } from '../components/ProductImage';  
import { ProducTitle } from '../components/ProductItle';
import { ProductButtons } from '../components/ProductButtons';
import ProductCard from '../components/index';
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppintCarts';
import { products } from '../data/products';



export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart} = useShoppingCart();

  return (

    <div className='bg-dark'>
        <h1>Shopping store</h1>
       
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px'
        }}>

          {products.map( product => (
            <ProductCard 
              key={ product.id  }
              product={ product }
              className="bg-dark text-white"
              onChange={(evento) => onProductCountChange(evento)}
              value = { shoppingCart[product.id]?.count || 0}
              
            >
              <ProductImage className="custom-img" />
              <ProducTitle className="text-bold" />
              <ProductButtons className="custom-buttons" style={ { backgroundColor: 'green'} } />
            </ProductCard>
        
          ) )}  
        </div>

        {
          
        }
        <div className="shopping-cart">
          {
             Object.entries(shoppingCart).map(([id,item]) => (
                 
          <ProductCard 
              key={id}
              product={ item }
              className="bg-dark text-white"
              style={{ width: '100px' }}
              onChange={(evento) => onProductCountChange(evento) }
              value = {item.count}
      
            >
              <ProductImage className="custom-img" />
              <ProductButtons className="custom-buttons" style={ 
                { backgroundColor: 'green',
                  display: "flex",
                  justifyContent: "center"

                } } />
          </ProductCard>
              
            ))
          }
       
          
           
        </div>  
        <div> {JSON.stringify(shoppingCart) } </div>
      
    </div>
  ) }

