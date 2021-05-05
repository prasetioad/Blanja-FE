import React from 'react'

import pict from '../../../images/men zalora suit.png'
import "./style.css"

export default function CardProCheckOut() {
    return (
        <div className="card-checkout">
            <div className="card-checkout-sect-1">
                <img src={pict} alt="" />
            </div>
            <div className="card-checkout-sect-2">
                <h3>Men's formal Suit - Black</h3>
                <p>Zalora Cloth</p>
            </div>
            <div className="card-checkout-sect-3">
                <h3>$20</h3>
            </div>

        </div>
    )
}
