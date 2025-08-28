


import { ProductImage } from '../components/ProductImage';  
import { ProducTitle } from '../components/ProductItle';
import { ProductButtons } from '../components/ProductButtons';
import ProductCard from '../components/index';



const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'  
}


export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '20px'
        }}>

      <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
      </ProductCard>

        <ProductCard product={product}>
          <ProductImage  />
          <ProducTitle title={ "cafe con la leche"} />
          <ProductButtons />
        </ProductCard>
   
        </div>
    </div>
  )
}
