import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS

import { Home } from '../../components/templates'
import NewHome from '../../components/organisms/Home/NewHome'
import PopularHome from '../../components/organisms/Home/PopularHome'
import CarouselOne from '../../components/organisms/Home/Corousel 1/index'

export default function HomePage(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <Home/>
         <CarouselOne/>
         <NewHome />
         <PopularHome />
      </div>
   )
}