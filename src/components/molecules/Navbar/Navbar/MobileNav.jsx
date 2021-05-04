import css from './style.module.css'
import { useHistory } from 'react-router'
// IMAGES
import Search from '../../../images/Search.png'
import Filter from '../../../images/filter.png'
// ATOMS
import { Button } from '../../../atoms'

export default function MobileNav() {
   const history = useHistory()
   return(
      <div className="displayColumn">
         <div className="displayRow" style={{justifyContent: "space-between", marginBottom: "36px", width: "100%;"}}>
            <div className={"displayRow " + css.searchMobile}>
               <input className={css.searchMobileInput} placeholder="Search ..." required type="text"/>
               <img src={Search} style={{height: "24px", paddingLeft: "24px", width: "24px"}}/>
            </div>
         </div>
         <div className="displayRow" style={{justifyContent: "space-between"}}>
            <div onClick={ () => { history.push("/login") } }><Button btnClr="#273AC7" cls={css.authBtnMobileLogin} ftClr="white" val="Login"/></div>
            <div onClick={ () => { history.push("/register") } }><Button btnClr="white" cls={css.authBtnMobileRegister} ftClr="#9B9B9B" val="Register"/></div>
         </div>
      </div>
   )
}