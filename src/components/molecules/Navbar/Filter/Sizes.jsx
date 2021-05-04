import css from './style.module.css'
import { useState } from 'react'
// ATOMS
import Button from '../../../atoms/Button'

export default function Sizes() {
   const colorArray = ["S", "M", "L"]
   const [size, selectSize] = useState(null)
   return(
      <div className={"displayColumn " + css.paddingFilter}>
         <div className={css.filterCategoryText}>Sizes</div>
         <div className={"displayRow " + css.filterOption}>
         {colorArray.map((item) => 
            <div onClick={ () => { selectSize(item) } }>
               <Button 
                  cls={
                     size === item ? 
                     "hoverThis " + css.sizeBtn + " " + css.selectSize 
                     : 
                     "hoverThis " + css.sizeBtn + " " + css.unselectSize
                  } 
                  val={item}
               />
            </div>
         )}
         </div>
      </div>
   )
 }