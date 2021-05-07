import { Helmet } from 'react-helmet'
import Jacket from '../../components/organisms/Category/Jacket'
import Pants from '../../components/organisms/Category/Pants'
import Shoes from '../../components/organisms/Category/Shoes'
import Shorts from '../../components/organisms/Category/Shorts'
import Tshirt from '../../components/organisms/Category/Tshirt'
// import './style.css'
// ATOMS

import { Home } from '../../components/templates'

export default function Category(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <Home/>

         {/* Ini nanti di panggil dari category, Untuk navigasi bebas mau pake state atau route */}
         <Tshirt />
         <Jacket />
         <Pants />
         <Shorts />
         <Shoes />
        
      </div>
   )
}