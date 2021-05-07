import React from 'react'
import './style.css'

export default function ShoppingSum() {
    return (
        <div className="box-shop-checkout">
            <h3>Shopping Summary</h3>
            <div className="box-shop-line-checkout">
                <p>Order</p>
                <h5>$40.0</h5>
            </div>
            <div className="box-shop-line-checkout">
                <p>Delivery</p>
                <h5>$5.0</h5>
            </div>
            <hr />
            <div className="box-shop-line-checkout">
                <h4>Shopping Summary</h4>
                <h5>$45.0</h5>
            </div>
            <button>Select Payment</button>
        </div>
    )
}
