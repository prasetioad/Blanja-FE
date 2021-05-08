import css from './profileUser.module.css';
import Swal from 'sweetalert2'
// ATOMS
import { Button } from '../../../atoms';
import { useEffect } from 'react';
import axiosApiInstance from '../../../../helpers/axios';
import { useState } from 'react';

export default function ShippingAddress({ func }) {
   const [shippingDest, setShippingDest] = useState([])
    // USE EFFECT
    useEffect(() => {
      axiosApiInstance.get(process.env.REACT_APP_API_URL+'/address')
      .then((res)=>{
         setShippingDest(res.data.data);
      })
      .catch((err)=>{
         console.log(err.response);
      })
   }, [shippingDest])
   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText}>Choose another address</span>
            <span className={css.rightSideUserTitleSmallText}>Manage your shipping address</span>
         </div>
         <div className={"displayColumn " + css.insideAddressArea}>
            <Button btnClr="white" cls={css.addNewAddressBtn} ftClr="#9B9B9B" func={func} val ="Add new address"/>
            {shippingDest &&
            shippingDest.map((data, index)=>{return(

               <div className={"displayColumn " + css.changeAddressArea}>
               <span className={css.changeAddressPeopleName} key={index.id}>{data.name}</span>
               <span className={css.changeAddressLocation}>
                  {data.type}, {data.address},  
                  {data.city},  {data.postalCode}, <br/>
                  Phone: {data.phoneNumber}
               </span>
               <span 
                  className={"hoverThis " + css.changeAddressBtn} 
                  onClick={ () => { 
                     Swal.fire(
                        "Sukses!", 
                        "Alamat pengiriman barang/paket berhasil di ganti ~",
                        "success"
                        )} 
                     }> Change address </span>
            </div>
                     )})}
         </div>
      </div>
   )
}