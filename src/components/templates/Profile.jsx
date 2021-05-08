import css from './style.module.css';
import { useState } from 'react';
// ORGANISMS
import { Navbar, Filter, Sidebar, MyAccount, ShippingAddress, AddNewAddress, MyOrderUser, StoreProfile, MyProducts, SellingProducts, MyOrderStore } from '../organisms';

export default function Profile({ ms, mous, moss, mpms, sm, smoud, smoum, smosd, smosm, smpmd, smpmm, na, nac, rea, sg, udc, cau, au, pog, spp, cp, ipn, ud }) {
   const [filter, showFilter] = useState(false)
   const [addAddress, showAddAddress] = useState(false)
   return(
      <div>
         <Navbar au={au} func={ () => { showFilter(true) } }/>
         {filter === true ?
         <Filter func={ () => {showFilter(false)} }/>
         : 
         null}
         <div className={css.profile}>
            <div className={css.profileSidebar}>
               <Sidebar ms={ms} sm={sm} au={au} ud={ud}/>
            </div>
            <div className={css.profileRightSide}>
               {ms === "My Account" ?
               <MyAccount switchGender={sg} udc={udc} cau={cau} au={au} ud={ud}/>
               :
               ms === "Shipping Address" ?
               <ShippingAddress func={ () => { showAddAddress(true) } }/>
               :
               ms === "My Order User" ?
               <MyOrderUser mous={mous} smoud={smoud} smoum={smoum}/>
               :
               ms === "Store Profile" ?
               <StoreProfile switchGender={sg} udc={udc} cau={cau} au={au} ud={ud}/>
               :
               ms === "My Products" ?
               <MyProducts mpms={mpms} smpmd={smpmd} smpmm={smpmm}/>
               :
               ms === "Selling Products" ?
               <SellingProducts pog={pog} spp={spp} cp={cp} ipn={ipn}/>
               :
               ms === "My Order Store" ?
               <MyOrderStore moss={moss} smosd={smosd} smosm={smosm}/>
               :
               null
               }
            </div>
         </div>
         {
         addAddress == true ?
         <AddNewAddress closeAddAddress={ () => {showAddAddress(false)} } na={na} nac={nac} removeExistAddress={rea}/>
         :
         null
         }
      </div>
   )
}