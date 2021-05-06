import React from 'react'

import HeadAddress from "../../components/organisms/CheckOut/HeadAddress";
import CardProCheckOut from "../../components/organisms/CheckOut/CardProCheckOut";
import ShoppingSum from '../../components/organisms/CheckOut/ShoppingSum';
import "./style.css"

export default function CheckOut() {
    return (
        <div className="container-fluid">
            <div className="container cont-heading-checkout">
                <h2>Checkout</h2>
                <div className="row row-checkout">
                    <div className="col-8 col-left-checkout">
                        <h3>Shipping Address</h3>
                        <HeadAddress />
                        <CardProCheckOut />
                        <CardProCheckOut />
                    </div>
                    <div className="col-4 col-right-checkout">
                        <ShoppingSum />
                    </div>
                </div>
            </div>
        </div>
    )
}
