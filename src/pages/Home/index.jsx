import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS
import { Home } from '../../components/templates'
import { useEffect, useState } from 'react'
import axiosApiInstance from '../../helpers/axios'

export default function HomePage(){
   const [product, setProduct] = useState()
   useEffect(() => {
      axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/product`)
      .then((res)=>{
         console.log(res)
         setProduct(res.data)
      })
      .catch((err)=>{
         console.log(err);
      })
   }, [])
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Home</title>
         </Helmet>
         <Home/>
      </div>
   )
}