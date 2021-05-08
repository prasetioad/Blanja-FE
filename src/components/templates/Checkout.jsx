// ORGANISMS
import { Navbar, HeadAddress, CardProCheckout, ShoppingSum } from '../organisms'

export default function Checkout() {
   return(
      <div style={{background: "#F9F9F9"}}>
         <Navbar/>
         <div className="container-fluid">
            <div className="container cont-heading-checkout">
                <h2>Checkout</h2>
                <div className="row row-checkout">
                    <div className="col-8 col-left-checkout">
                        <h3>Shipping Address</h3>
                        <HeadAddress />
                        <CardProCheckout />
                        <CardProCheckout />
                    </div>
                    <div className="col-4 col-right-checkout">
                        <ShoppingSum />
                    </div>
                </div>
            </div>
        </div>
      </div>
   )
}