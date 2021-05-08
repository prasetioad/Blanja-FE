import { useState } from 'react';
// ORGANISMS
import { Navbar, Filter, ProductTop, InformationProduct, OtherProducts } from '../organisms';

export default function Product() {
   const [filter, showFilter] = useState(false)
   return(
      <div style={{background: "#F9F9F9"}}>
         <Navbar func={ () => { showFilter(true) } }/>
         {filter === true ?
         <Filter func={ () => {showFilter(false)} }/>
         : 
         null}
         <ProductTop />
         <InformationProduct />
         <OtherProducts />
      </div>
   )
}