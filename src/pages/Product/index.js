import { Helmet } from 'react-helmet'
import InformationProfuct from '../../components/organisms/Product/InformationProduct'
import OtherProducts from '../../components/organisms/Product/OtherProducts'
import ProductTop from '../../components/organisms/Product/Product Carousel/index'
// import './style.css'
// ATOMS

import { Home } from '../../components/templates'

export default function Product(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Product</title>
         </Helmet>
         <Home/>

         <ProductTop />
         <InformationProfuct />
         <OtherProducts />
         
      </div>
   )
}