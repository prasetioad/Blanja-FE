import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS
import { Home } from '../../components/templates'

export default function HomePage(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <Home/>
      </div>
   )
}