import css from './profileStore.module.css';
import { useState } from 'react'
// IMAGES
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'
import NoOrder from '../../../images/NoOrder.png'
// ATOMS
import { Button } from '../../../atoms'
import { useEffect } from 'react';
import axiosApiInstance from '../../../../helpers/axios';

export default function MyOrderUser({ moss, smosd, smosm }) {
   const btnCls = "hoverThis " + css.myOrderBtn
   const orderButtonRowCarouselMobile = ["All items", "Not yet paid", "Packed", "Sent", "Completed", "Order cancel"]
   const [buttonOrder, switchButtonOrder] = useState(0)
   // SWITCH CAROUSEL BUTTON
   const switchBtn = (opr) => {
      if(opr === "+") { 
         if(buttonOrder < orderButtonRowCarouselMobile.length - 1) { 
            switchButtonOrder(buttonOrder + 1)
            smosm(orderButtonRowCarouselMobile[buttonOrder + 1])
         }
      }
      else if(opr === "-") { 
         if(buttonOrder > 0) {
            switchButtonOrder(buttonOrder - 1)
            smosm(orderButtonRowCarouselMobile[buttonOrder - 1])
         } 
      }
   }
   useEffect(() => {
      axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/store/order`)
      .then((res)=>{
         console.log(res.data);
      })
      .catch((err)=>{
         console.log(err.response);
      })
   }, [])
   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText + " " + css.hideInMobile}>My order</span>
            <div className={"displayRow " + css.myOrderBtnRowDesktop}>
               <Button 
                  cls={moss === "All items" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
                  val="All items"
               />
               <Button 
                  cls={moss === "Get paid" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
                  val="Get paid"
               />
               <Button 
                  cls={moss === "Processed" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
                  val="Processed"
               />
               <Button 
                  cls={moss === "Sent" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
                  val="Sent"
               />
               <Button 
                  cls={moss === "Completed" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
                  val="Completed"
               />
               <Button 
                  cls={moss === "Order cancel" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smosd} 
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