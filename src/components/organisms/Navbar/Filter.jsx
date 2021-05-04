import css from './style.module.css'
// IMAGES
import Close from '../../images/close.png'
// MOLECULES
import { Colors, Sizes, Categories, Brands } from '../../molecules'

export default function Filter({ func }) {
   return(
      <div className={"displayRow " + css.filter}>
         <div className={"displayRow " + css.transparentBackground}/>
         <div className={"displayColumn " + css.insideFilter}>
            <div className={"displayRow " + css.filterTop}>
               <img className={"hoverThis " + css.filterClose} onClick={func} src={Close}/>
               <span className={css.filterText}>Filter</span>
            </div>
            <Colors/>
            <Sizes/>
            <Categories/>
            <Brands/>
         </div>
      </div>
   )
}