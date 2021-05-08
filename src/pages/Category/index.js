import { Helmet } from 'react-helmet'
import Category from '../../components/templates/Category.jsx'
// import './style.css'
// ATOMS

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axiosApiInstance from '../../helpers/axios.js';

export default function CategoryPage(props){
   const {params} = useParams()
   const [category, setCategory] = useState()
   useEffect(() => {
      axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/category`)
      .then((res)=>{
         // console.log('response category :',res);
         setCategory(res.data)
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
         {/* Ini nanti di panggil dari category, Untuk navigasi bebas mau pake state atau route */}
         <Category param={params}/>
      </div>
   )
}