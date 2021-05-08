import css from './profileUser.module.css';
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
            <span className={css.rightSideUserTitleBigText}>My profile</span>
            <span className={css.rightSideUserTitleSmallText}>Manage your profile information</span>
         </div>
         <div className={css.myProfileArea}>
            <div className={"displayColumn " + css.myProfileLeftSide}>
               <div className={"displayRow " + css.insideMyProfileLeftSide}>
                  <div className={"displayColumn " + css.myProfileLeftSideLabel}>
                     <span className={css.myProfileInputLabel}>Name</span>
                     <span className={css.myProfileInputLabel}>Email</span>
                     <span className={css.myProfileInputLabel}>Phone Number</span>
                     <span className={css.myProfileInputLabel}>Gender</span>
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
                     <div className={"displayRow " + css.myProfileLeftSideSetupSpace}>
                        <div className="displayRow">
                           <div className={"hoverThis " + css.myProfileRadioButton} id="Laki-Laki" onClick={switchGender}>
                              <div className={css.myProfileInsideRadioButton} id="Laki-Laki" style={ud.gender === "Laki-Laki" ? {background: "#273AC7"} : null}/>
                           </div>
                           <span className={css.myProfileGender}>Laki-Laki</span>
                        </div>
                        <div className="displayRow">
                           <div className={"hoverThis " + css.myProfileRadioButton} id="Perempuan" onClick={switchGender}>
                              <div className={css.myProfileInsideRadioButton} id="Perempuan" style={ud.gender === "Perempuan" ? {background: "#273AC7"} : null}/>
                           </div>
                           <span className={css.myProfileGender}>Perempuan</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={css.dateOfBirthZone}>
                  <span className={"displayRow " + css.myProfileInputLabel} style={{alignItems: "center"}}>Date of Birth</span>
                  <div className={"displayRow " + css.myProfileLeftSideSetupSpace}>
                     {/* DROPDOWN - DATE */}
                     <div className={"displayColumn " + css.birthdateDropdownDate + " " + css.birthdateDropdownDateSize}>
                        <div className={"displayRow " + css.birthdateDropdownData}>
                           <span className={css.dropdownDataFont}><b>{date}</b></span>
                           <img alt="Dropdown" className="hoverThis" onClick={ () => {showDate(!dateDropdown) } } src={dateDropdown === true ? Top : Bottom}/>
                        </div>
                        <div className={"displayRow " + css.birthdateDropdownSelectDate} style={dateDropdown === false ? { display: "none" } : null}>
                           <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("d","-") } } src={Left}/>
                           <span className={css.dropdownDataFont} style={{color: "#9B9B9B"}}>{date}</span>
                           <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("d","+") } } src={Right}/>
                        </div>
                     </div>
                     {/* DROPDOWN - MONTH */}
                     <div className={"displayColumn " + css.birthdateDropdownMonth + " " + css.birthdateDropdownMonthSize}>
                        <div className={"displayRow " + css.birthdateDropdownData}>
                           <span className={css.dropdownDataFont}><b>{monthArray[month]}</b></span>
                           <img alt="Dropdown" className="hoverThis" onClick={ () => {showMonth(!monthDropdown) } } src={monthDropdown === true ? Top : Bottom}/>
                        </div>
                        <div className={"displayRow " + css.birthdateDropdownSelectMonth} style={monthDropdown === false ? { display: "none" } : null}>
                        <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("m","-") } } src={Left}/>
                           <span className={css.dropdownDataFont} style={{color: "#9B9B9B"}}>{monthArray[month]}</span>
                           <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("m","+") } } src={Right}/>
                        </div>
                     </div>
                     {/* DROPDOWN - YEAR */}
                     <div className={"displayColumn " + css.birthdateDropdownYear + " " + css.birthdateDropdownYearSize}>
                        <div className={"displayRow " + css.birthdateDropdownData}>
                           <span className={css.dropdownDataFont}><b>{year}</b></span>
                           <img alt="Dropdown" className="hoverThis" onClick={ () => {showYear(!yearDropdown) } } src={yearDropdown === true ? Top : Bottom}/>
                        </div>
                        <div className={"displayRow " + css.birthdateDropdownSelectYear} style={yearDropdown === false ? { display: "none" } : null}>
                        <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("y","-") } } src={Left}/>
                           <span className={css.dropdownDataFont} style={{color: "#9B9B9B"}}>{year}</span>
                           <img alt="Arrow" className={"hoverThis " + css.dropdownDataArrow} onClick={ () => { changeDMY("y","+") } } src={Right}/>
                        </div>
                     </div>
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