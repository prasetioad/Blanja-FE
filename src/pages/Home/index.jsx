import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS

import { Home } from '../../components/templates'
import NewHome from '../../components/organisms/Home/NewHome'
import PopularHome from '../../components/organisms/Home/PopularHome'
import Carousel1 from '../../components/organisms/Home/Corousel 1'

export default function HomePage(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <Home/>
         {/* <Carousel1 /> */}
         <NewHome />
         <PopularHome />
      </div>
   )
}