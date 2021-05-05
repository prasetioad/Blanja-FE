import { Helmet } from 'react-helmet'
import Jacket from '../../components/organisms/Category/Jacket'
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
        
      </div>
   )
}