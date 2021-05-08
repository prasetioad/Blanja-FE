import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import Swal from 'sweetalert2'
// ORGANISMS
import { Navbar, ProductTop, InformationProduct, OtherProducts } from '../organisms'

export default function Product() {
   const urlApi = process.env.REACT_APP_API_URL;
   let { idproduct } = useParams();

   const [product, setProduct] = useState([])

   useEffect(() => {
      if (idproduct) {
         axios.get(`${urlApi}/product/${idproduct}`)
            .then((result) => {
               const newProduct = result.data.data[0]
               setProduct(newProduct)

            })
            .catch((err) => {
               Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'can not get this product!',
               })
            })
      }
   }, [idproduct])

   return (
      <div style={{ background: "#F9F9F9" }}>
         <Navbar />
         <ProductTop product={product} />
         <InformationProduct product={product} />
         <OtherProducts product={product} />
      </div>
   )
}