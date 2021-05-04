import css from './style.module.css'
// IMAGES
import Logo from '../../../images/tukuLogo.png'
import Search from '../../../images/Search.png'
import Filter from '../../../images/filter.png'

export default function LeftNav({ func }) {
   return(
      <div className={"displayRow " + css.leftNav}>
         <img className={css.logo} src={Logo}/>
         <div className="displayRow">
            <div className={"displayRow " + css.searchBorder}>
               <input className={css.inputSearch} placeholder="Search ..."/>
               <img className={css.searchLogo} src={Search}/>
            </div>
            <img className={"hoverThis " + css.filterBtn} onClick={func} src={Filter}/>
         </div>
      </div>
   )
}