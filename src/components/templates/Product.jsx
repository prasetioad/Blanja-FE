// ORGANISMS
import { Navbar, ProductTop, InformationProduct, OtherProducts } from '../organisms'

export default function Product() {
   return(
      <div style={{background: "#F9F9F9"}}>
         <Navbar/>
         <ProductTop />
         <InformationProduct />
         <OtherProducts />
      </div>
   )
}