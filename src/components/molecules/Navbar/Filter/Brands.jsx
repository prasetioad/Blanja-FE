import css from './style.module.css'

export default function Brand() {
   return(
      <div className={"displayColumn " + css.paddingFilter}>
         <div>Brand</div>
         <div>Isi Brand</div>
      </div>
   )
}