import css from './profileStore.module.css';
import { useState } from 'react'
// IMAGES
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'
import Search from '../../../images/Search.png'
import NoProduct from '../../../images/NoProduct.png'
// ATOMS
import { Button } from '../../../atoms'
import { useEffect } from 'react';
import axiosApiInstance from '../../../../helpers/axios';

export default function MyProducts({ mpms, smpmd, smpmm }) {
   const btnCls = "hoverThis " + css.myOrderBtn
   const productButtonRowCarouselMobile = ["All items", "Sold out", "Archieved"]

   const [allItem, setAllItem] = useState([])
   const [soldOut, setSoldOut] = useState([])
   const [archived, setArchived] = useState([])
   const [dataSearch, setDataSearch] = useState([])


   const [buttonOrder, switchButtonOrder] = useState(0)
   // SWITCH CAROUSEL BUTTON
   const switchBtn = (opr) => {
      if(opr === "+") { 
         if(buttonOrder < productButtonRowCarouselMobile.length - 1) { 
            switchButtonOrder(buttonOrder + 1)
            smpmm(productButtonRowCarouselMobile[buttonOrder + 1])
         }
      }
      else if(opr === "-") { 
         if(buttonOrder > 0) {
            switchButtonOrder(buttonOrder - 1)
            smpmm(productButtonRowCarouselMobile[buttonOrder - 1])
         } 
      }
   }

   useEffect(() => {
     axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/store/product`)
     .then((res)=>{
         setAllItem(res.data.data)
     })
     .catch((err)=>{
        console.log(err.response);
     })
     axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/store/product/sold`)
     .then((res)=>{
      setSoldOut(res.data.data)
     })
     .catch((err)=>{
        console.log(err.response);
     })
     axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/store/product/archive`)
     .then((res)=>{
         setArchived(res.data.data)
     })
     .catch((err)=>{
        console.log(err.response);
     })
   }, [])

   const onChangeSearch=(e)=>{
      console.log(e.target.value);
      axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/store/product?keyword=${e.target.value}`)
      .then((res)=>{setDataSearch(res.data.data)})
      .catch((err)=>{console.log(err.response)})
   }
   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText + " " + css.hideInMobile}>My product</span>
            <div className={"displayRow " + css.myOrderBtnRowDesktop}>
               <Button 
                  cls={mpms === "All items" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smpmd} 
                  val="All items"
               />
               <Button 
                  cls={mpms === "Sold out" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smpmd} 
                  val="Sold out"
               />
               <Button 
                  cls={mpms === "Archieved" ? btnCls + " " + css.selectedMyOrderBtn : btnCls} 
                  func={smpmd} 
                  val="Archieved"
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
                  val={productButtonRowCarouselMobile[buttonOrder]}
               />
               <img 
                  alt="Arrow Right"
                  className={css.arrowCarousel} 
                  onClick={ () => { switchBtn("+") } } 
                  src={Right} 
                  style={buttonOrder >= productButtonRowCarouselMobile.length - 1 ? {opacity: "0.25"} : null}
               />
            </div>
         </div>
         <div className={"displayColumn " + css.rightSideMyOrderDataShow}>
            <div className={"displayRow " + css.rightSideProductSearchBorder}>
               <img alt="Search" className={css.productSearchLogo} src={Search}/>
               <input className={css.productSearchInput} placeholder="Search" type="text" onChange={(e)=>{onChangeSearch(e)}}/>
            </div>
            <div className={"displayColumn " + css.productListTable}>
               <div className={"displayRow " + css.productListTableCategory}>
                  <span className={css.productNameTitle}>Product Name</span>
                  <span className={css.productPriceTitle}>Price</span>
                  <span className={css.productStockTitle}>Stock</span>
               </div>
               <div className={"displayColumn " + css.productListData}>
                  <img alt="No Product" className={css.noProductImg} src={NoProduct}/>
               </div>
            </div>
         </div>
      </div>
   )
}