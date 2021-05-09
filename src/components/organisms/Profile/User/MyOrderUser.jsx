import css from './profileUser.module.css';
import { useState } from 'react'
// IMAGES
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'
import NoOrder from '../../../images/NoOrder.png'
// ATOMS
import { Button } from '../../../atoms'
import { useEffect } from 'react';
import axiosApiInstance from '../../../../helpers/axios';
import axios from 'axios';

export default function MyOrderUser({ mous, smoud, smoum }) {
   const btnCls = "hoverThis " + css.myOrderBtn
   const orderButtonRowCarouselMobile = ["All items", "Not yet paid", "Packed", "Sent", "Completed", "Order cancel"]
   const [buttonOrder, switchButtonOrder] = useState(0)
   const [myOrder, setMyOrder] = useState([])
   // SWITCH CAROUSEL BUTTON
   const switchBtn = (opr) => {
      if(opr === "+") { 
         if(buttonOrder < orderButtonRowCarouselMobile.length - 1) { 
            switchButtonOrder(buttonOrder + 1)
            smoum(orderButtonRowCarouselMobile[buttonOrder + 1])
         }
      }
      else if(opr === "-") { 
         if(buttonOrder > 0) {
            switchButtonOrder(buttonOrder - 1)
            smoum(orderButtonRowCarouselMobile[buttonOrder - 1])
         } 
      }
   }
   // USEEFFECT
   useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/order/${localStorage.getItem('id')}`, {headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }})
      .then((res)=>{ 
         setMyOrder(res.data.data)
      })
      .catch((err)=>{ console.log(err.response)})
   }, [])


   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText + " " + css.hideInMobile}>My order</span>
            <div className={"displayRow " + css.myOrderBtnRowDesktop}>
               <Button 
                  cls={mous === "All items" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="All items"
               />
               <Button 
                  cls={mous === "Not yet paid" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="Not yet paid"
               />
               <Button 
                  cls={mous === "Packed" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="Packed"
               />
               <Button 
                  cls={mous === "Sent" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="Sent"
               />
               <Button 
                  cls={mous === "Completed" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="Completed"
               />
               <Button 
                  cls={mous === "Order cancel" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smoud} 
                  val="Order cancel"
               />
            </div>
            <div className={"displayRow " + css.myOrderBtnRowMobile}>
               <img 
                  alt="Arrow Left"
                  className={css.arrowCarousel} 
                  onClick={ () => { switchBtn("-") } } 
                  src={Left}
                  style={buttonOrder < 1 ? {opacity: "0.25"} : null}
               />
               <Button 
                  cls={btnCls + " " + css.selectedMyOrderBtn} 
                  val={orderButtonRowCarouselMobile[buttonOrder]}
               />
               <img 
                  alt="Arrow Right"
                  className={css.arrowCarousel} 
                  onClick={ () => { switchBtn("+") } } 
                  src={Right} 
                  style={buttonOrder >= orderButtonRowCarouselMobile.length - 1 ? {opacity: "0.25"} : null}
               />
            </div>
         </div>
         <div className={"displayColumn " + css.rightSideMyOrderDataShow}>
            <img alt="No Order" className={css.noOrderImg} src={NoOrder}/>
         </div>
      </div>
   )
}