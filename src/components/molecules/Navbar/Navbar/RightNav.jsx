import css from './style.module.css'
import { useHistory } from 'react-router'
// IMAGES
import Cart from '../../../images/cart.png'
import Bell from '../../../images/bell.png'
import Mail from '../../../images/mail.png'
import DummyProfile from '../../../images/dummyProfile.png'
// ATOMS
import { Button } from '../../../atoms'

export default function RightNav() {
   const loginSwitchTest = false
   const history = useHistory()
   return(
      <div className={"displayRow " + css.rightNav}>
         <div></div>
         <div className="displayRow">
            <img className={"hoverThis " + css.cartLogo} onClick={ () => { history.push("/bag") } } src={Cart}/>
            {
            loginSwitchTest === false ?
            <div className="displayRow" style={{justifyContent: "space-between", width: "17vw"}}>
               <div onClick={ () => { history.push("/login") } }><Button cls={"hoverThis " + css.loginBtn} btnClr="#273AC7" ftClr="white" val="Login"/></div>
               <div onClick={ () => { history.push("/register") } }><Button cls={"hoverThis " + css.regBtn} btnClr="white" ftClr="#9B9B9B" val="Register"/></div>
            </div>
            :
            <div className={"displayRow " + css.rightBtnZone}>
               <img className={"hoverThis " + css.notification} src={Bell}/>
               <img className={"hoverThis " + css.mail} src={Mail}/>
               <img className={"hoverThis " + css.profile} src={DummyProfile}/>
            </div>
            }  
         </div>
      </div>
   )
}