import css from './profileStore.module.css';
import { useState } from 'react'
// ATOMS
import { Button, Input } from '../../../atoms'
// IMAGES 
import Top from '../../../images/Top.png'
import Bottom from '../../../images/Bottom.png'
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'

export default function MyAccount({ switchGender, cau, au, udc, ud }) {
   const monthArray = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]
   // CHANGE DATE
   const [date, setDate] = useState(10)
   const [month, setMonth] = useState(8)
   const [year, setYear] = useState(2000)
   // TRIGGER DROPDOWN
   const [dateDropdown, showDate] = useState(false)
   const [monthDropdown, showMonth] = useState(false)
   const [yearDropdown, showYear] = useState(false)
   // FUNCTION
   const changeDMY = (opt, opr) => {
      if(opt === "d") {
         if(opr === "-" && date > 1) { setDate(date - 1) }
         else if(opr === "+" && date < 31) { setDate(date + 1) }
      }
      else if(opt === "m") {
         if(opr === "-" && month > 0) { setMonth(month - 1) }
         else if(opr === "+" && month < 11) { setMonth(month + 1) }
      }
      else if(opt === "y") {
         if(opr === "-" && year > 1945) { setYear(year - 1) }
         else if(opr === "+" && year < 2021) { setYear(year + 1) }
      }
   }
   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText}>My profile store</span>
            <span className={css.rightSideUserTitleSmallText}>Manage your profile information</span>
         </div>
         <div className={css.myProfileArea}>
            <div className={"displayColumn " + css.myProfileLeftSide}>
               <div className={"displayRow " + css.insideMyProfileLeftSide}>
                  <div className={"displayColumn " + css.myProfileLeftSideLabel}>
                     <span className={css.myProfileInputLabel}>Store Name</span>
                     <span className={css.myProfileInputLabel}>Email</span>
                     <span className={css.myProfileInputLabel}>Phone Number</span>
                     <span className={css.myProfileInputLabel}>Store description</span>
                  </div>
                  <div className={"displayColumn " + css.myProfileLeftSideInputArea}>
                     <Input 
                        cls={css.myProfileInput + " " + css.myProfileLeftSideSetupSpace} 
                        nm="name" 
                        onCg={udc} 
                        plcHldr="Input your name here" 
                        type="text"
                        val={ud.name}
                     />
                     <Input 
                        cls={css.myProfileInput + " " + css.myProfileLeftSideSetupSpace} 
                        nm="email" 
                        onCg={udc} 
                        plcHldr="Input your e-mail here" 
                        type="text"
                        val={ud.email}
                     />
                     <Input 
                        cls={css.myProfileInput + " " + css.myProfileLeftSideSetupSpace} 
                        nm="phoneNumber" 
                        onCg={udc} 
                        plcHldr="Input your phone number here" 
                        type="text"
                        val={ud.phoneNumber}
                     />
                     <textarea 
                        className={css.myProfileInput + " " + css.myProfileLeftSideSetupSpace + " " + css.myProfileTextarea} 
                        name="storeDescription" 
                        onChange={udc} 
                        placeholder="Input your store description here" 
                        val={ud.storeDescription}
                     />
                  </div>
               </div>
            </div>
            <div className={"displayColumn " + css.myProfileRightSide}>
               <img alt="Profile Picture" className={css.myProfilePic} src={au}/>
               <Button btnClr="white" cls={css.myProfileSelectImage} func={cau} val="Select image"/>
               <Button btnClr="#273AC7" cls={css.myProfileSelectImage} ftClr="white" val="Save"/>
            </div>
         </div>
      </div>
   )
}