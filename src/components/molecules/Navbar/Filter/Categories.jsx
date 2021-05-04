import css from './style.module.css'

export default function Category() {
    return(
      <div className={"displayColumn " + css.paddingFilter}>
          <div>Category</div>
          <div>Isi Category</div>
       </div>
    )
 }