import css from './style.module.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
// IMAGES
import Close from '../../images/close.png'
// ATOMS
import { Button } from '../../atoms'
// MOLECULES
import { Colors, Sizes, Categories } from '../../molecules'

export default function Filter({ func }) {
   // COLORS
   const [color, selectColor] = useState(null)
   // SIZES
   const [alphabetSize, selectAlphabetSize] = useState(null)
   const [numericSize, selectNumericSize] = useState(null)
   // CATEGORIES
   const [category, selectCategory] = useState(null)
   const [finalFilter, setFinalFilter] = useState({})
   // FUNCS
   const discard = () => {
      selectColor(null)
      selectAlphabetSize(null)
      selectNumericSize(null)
      selectCategory(null)
   }
   const apply = () => {
      if(
         category === "Sandals" && numericSize === null || 
         category === "Shoes" && numericSize === null
      ) { Swal.fire("Error!", "Jika ingin mencari sendal dan sepatu, harap masukkan juga ukurannya!", "error") }
      else if(
         category !== "Sandals" && 
         category !== "Shoes" && 
         category !== null && 
         alphabetSize === null
      ) { Swal.fire("Error!", "Jika ingin mencari pakaian atau celana dan semacamnya, harap masukkan juga ukurannya!", "error") }
      else if(
         color === null &&
         alphabetSize === null && 
         numericSize === null && 
         category === null
      ) { Swal.fire("Error!", "Setidaknya minimal harus ada satu pilihan untuk fitur filter pencarian!", "error") }
      else { 
         Swal.fire("Berhasil!", "Berhasil menambahkan filter pencarian yang di pilih!", "success")
         .then(() => { 
            setFinalFilter({color: color, alphabet: alphabetSize, number: numericSize, category: category})
            func()
         })   
      }
   }
   return(
      <div className={"displayRow " + css.filter}>
         <div className={"displayRow " + css.transparentBackground}/>
         <div className={"displayColumn " + css.insideFilter}>
            <div className={"displayRow " + css.filterTop}>
               <img className={"hoverThis " + css.filterClose} onClick={func} src={Close}/>
               <span className={css.filterText}>Filter</span>
            </div>
            <div className={"displayColumn " + css.filterArea}>
               <Colors col={[color, (e) => { selectColor(e.target.parentElement.parentElement.getAttribute("color")) }]}/>
               <Sizes 
                  alph={[alphabetSize, (e) => { selectAlphabetSize(e.target.innerText) }]} 
                  cat={category} 
                  num={[numericSize, (e) => { selectNumericSize(e.target.innerText) }]}
               />
               <Categories cat={category} catState={ (e) => { selectCategory(e.target.innerText) } }/>
            </div>
            <div className={"displayRow " + css.filterBottom}>
               <Button btnClr="white" cls={css.discardBtn} func={ () => { discard() } } val="Discard"/>
               <Button btnClr="#273AC7" cls={css.applyBtn}  func={ () => { apply() } } ftClr="white" val="Apply"/>
            </div>
         </div>
      </div>
   )
}