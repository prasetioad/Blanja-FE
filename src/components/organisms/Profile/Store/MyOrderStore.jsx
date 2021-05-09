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
import { useHistory } from 'react-router';

export default function MyOrderUser({ moss, smosd, smosm }) {
   const history = useHistory()
   const btnCls = "hoverThis " + css.myOrderBtn
   const orderButtonRowCarouselMobile = ["All items", "Not yet paid", "Packed", "Sent", "Completed", "Order cancel"]
   const [buttonOrder, switchButtonOrder] = useState(0)
   const [cart, setCart] = useState(null)
   const [getPaid, setGetPaid] = useState(null)
   const [process, setProcess] = useState(null)
   const [sent, setSent] = useState(null)
   const [completed, setCompleted] = useState(null)
   const [orderCancel, setOrderCancel] = useState(null)
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
      // axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/cart`)
      // .then((res)=>{
      //    setCart(res.data.data)
      // })
      // .catch((err)=>{
      //    console.log(err.response);
      // })

      // axiosApiInstance.get(`${process.env.REACT_APP_API_URL}/order/${localStorage.getItem('id')}`)
      // .then((res)=>{
      //    setGetPaid(res.data.data)
      // })
      // .catch((err)=>{
      //    console.log(err.response);
      // })

   }, [])
   console.log(getPaid);
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
            <div className="myOrderDataShowObjek" style={{display:'flex', justifyContent:'start', height: '50vh'}}>
            {moss === "All items"?
            cart ?
            cart.map((item)=>{return(
               
                  <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey', marginLeft: '10px'}} className="myOrderShowObjekProfil"  onClick={()=>{history.push(`./product/${item.idProduct}`)}}>
                     <div style={{height: '60%', width:'100%'}}>
                        <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                     </div>
                     <div style={{height: '40%',marginTop: '20px',  marginLeft:'5px'}}>
                        <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500'}}>{item.brand}</p>
                        <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                        {/* <p></p> */}
                     </div>   
                  </div>
              
               )})
               : <img alt="No Order" className={css.noOrderImg} src={NoOrder}/> : 
               moss === "Get paid" ?
               getPaid ?
               getPaid.map((item)=>{return(
                  
                     <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey',  marginLeft: '10px'}} className="myOrderShowObjekProfil" onClick={()=>{history.push(`./product/${item.id}`)}}>
                        <div style={{height: '60%', width:'100%'}}>
                           <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                        </div>
                        <div style={{height: '40%',marginTop: '5px',  marginLeft:'5px'}}>
                           <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500', fontSize: '10px'}}>{item.title}</p>
                           <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                           {/* <p></p> */}
                        </div>   
                     </div>
                 
                  )}) : 
                  <img alt="No Order" className={css.noOrderImg} src={NoOrder}/>
               : moss === "Processed" ?
               getPaid ?
               cart.map((item)=>{return(
                  
                     <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey',  marginLeft: '10px'}} className="myOrderShowObjekProfil" onClick={()=>{history.push(`./product/${item.idProduct}`)}}>
                        <div style={{height: '60%', width:'100%'}}>
                           <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                        </div>
                        <div style={{height: '40%',marginTop: '20px',  marginLeft:'5px'}}>
                           <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500'}}>{item.brand}</p>
                           <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                           {/* <p></p> */}
                        </div>   
                     </div>
                  
                  )}) : 
                  <img alt="No Order" className={css.noOrderImg} src={NoOrder}/> :
                  moss === "Sent"  ?
               getPaid ?
               cart.map((item)=>{return(
                  
                     <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey', marginLeft: '10px'}} className="myOrderShowObjekProfil" onClick={()=>{history.push(`./product/${item.idProduct}`)}}>
                        <div style={{height: '60%', width:'100%'}}>
                           <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                        </div>
                        <div style={{height: '40%',marginTop: '20px',  marginLeft:'5px'}}>
                           <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500'}}>{item.brand}</p>
                           <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                           {/* <p></p> */}
                        </div>   
                     </div>
                
                  )}) : 
                  <img alt="No Order" className={css.noOrderImg} src={NoOrder}/> : 
                  moss === "Completed"  ?
                  getPaid ?
                  cart.map((item)=>{return(
                     
                        <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey', marginLeft: '10px'}} className="myOrderShowObjekProfil" onClick={()=>{history.push(`./product/${item.idProduct}`)}}>
                           <div style={{height: '60%', width:'100%'}}>
                              <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                           </div>
                           <div style={{height: '40%',marginTop: '20px',  marginLeft:'5px'}}>
                              <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500'}}>{item.brand}</p>
                              <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                              {/* <p></p> */}
                           </div>   
                        </div>
                     
                     )}) : 
                     <img alt="No Order" className={css.noOrderImg} src={NoOrder}/> : 
                     moss === "Order cancel"  ?
                  getPaid ?
                  cart.map((item)=>{return(
                     
                        <div style={{display:'flex', justifyContent: 'flex-start',flexDirection:'column', width:'8vw', height:'25vh', background: 'white', boxShadow:'1px 2px 10px 7px grey', marginLeft: '10px'}} className="myOrderShowObjekProfil" onClick={()=>{history.push(`./product/${item.idProduct}`)}}>
                           <div style={{height: '60%', width:'100%'}}>
                              <img src={process.env.REACT_APP_API_IMG +item.image} alt="item" style={{width:'100%'}}/>
                           </div>
                           <div style={{height: '40%',marginTop: '20px',  marginLeft:'5px'}}>
                              <p style={{marginBottom:'0px', fontFamily:'Metropolis', fontWeight:'500'}}>{item.brand}</p>
                              <p style ={{color: '#DB3022' ,fontSize:'16px'}}> {item.price}</p>
                              {/* <p></p> */}
                           </div>   
                        </div>
                    
                     )}) : 
                     <img alt="No Order" className={css.noOrderImg} src={NoOrder}/> : <div></div>
            }
            </div>
         </div>
      </div>
   )
}