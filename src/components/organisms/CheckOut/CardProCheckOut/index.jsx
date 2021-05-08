import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axiosApiInstance from '../../../../helpers/axios'


import pict from '../../../images/men zalora suit.png'
import "./style.css"

export default function CardProCheckOut(props) {
    const productId = useParams()
    const [myOrder, setMyOrder] = useState()
    useEffect(() => {
        axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/product/${productId}`)
    }, [])
    console.log(props);
    return (
        <>
                {myOrder && <>
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
                </>}
        </>
    )
}
