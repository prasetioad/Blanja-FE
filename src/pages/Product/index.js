import { Helmet } from 'react-helmet'
// import './style.css'
// ATOMS
import Products from '../../components/templates/Products.jsx'
import { Home } from '../../components/templates'

export default function Product(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Product</title>
         </Helmet>
         {/* <Home/> */}
         <Products/>
      </div>
   )
}