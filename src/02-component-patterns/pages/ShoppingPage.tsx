


import { ProductImage } from '../components/ProductImage';  
import { ProducTitle } from '../components/ProductItle';
import { ProductButtons } from '../components/ProductButtons';
import ProductCard from '../components/index';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'  
}



export const ShoppingPage = () => {

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

      <ProductCard product={product} className="bg-dark text-white ">
          <ProductCard.Image className={"custom-img"}  />
          <ProductCard.Title className={"text-bold"}  />
          <ProductCard.Buttons className="custom-buttons" 
            />
      </ProductCard>


        <ProductCard product={product}  className="bg-dark text-white ">
          <ProductImage className={"custom-img"}  />
          <ProducTitle title={ "cafe con la leche"} className={"text-bold"} />
          <ProductButtons className="custom-buttons" style={ { backgroundColor: 'green'} } />
        </ProductCard>


         <ProductCard 
         product={product}  
         className='bg-dark text-white'
         style={ { color: 'red'} }
          >
          <ProductImage style={{border: '2px solid red'}}/>
          <ProducTitle   />
          <ProductButtons  />
        </ProductCard>
        
        </div>
    </div>
  )
}
