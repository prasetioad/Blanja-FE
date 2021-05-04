import css from './style.module.css'
// ATOMS
import Button from '../../../atoms/Button'

export default function Colors() {
   const colorArray = ["indianred", "#3CB371", "#151867"]
    return(
      <div className={"displayColumn " + css.paddingFilter}>
          <div className={css.filterCategoryText}>Colors</div>
          <div className={"displayRow " + css.filterOption}>
            {colorArray.map((item) => 
               <Button cls={"hoverThis " + css.colorBtn} btnClr={item}/>
            )}
          </div>
       </div>
    )
 }