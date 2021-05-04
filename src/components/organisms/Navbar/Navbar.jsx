import css from './style.module.css'
import { useState } from 'react'
// IMAGES
import NavBtn from '../../images/navMobile.png'
// MOLECULES
import { LeftNav, RightNav, MobileNav } from '../../molecules'

export default function Navbar({ func }) {
   const [navMobile, showNavMobile] = useState(false)
   return(
      <div className={"displayColumn " + css.navbar}>
         <div className={"displayRow " + css.navbarTop}>
            <LeftNav func={func}/>
            <RightNav/>
            <img className={css.navBtn} onClick={ () => showNavMobile(!navMobile) } src={NavBtn}/>
         </div>
         <div className={"displayColumn " + css.navbarBottom} style={navMobile === false ? {display: "none"} : null}>
            <MobileNav/>
         </div>
      </div>
   )
}