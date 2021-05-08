import css from './profileStore.module.css';
import { useState } from 'react'
// ATOMS
import { Button, Input } from '../../../atoms'
// IMAGES
import SellingProductDescription from '../../../images/SellingProductDescription.png'
import DefaultPhoto from '../../../images/PhotoOfGoods.png'
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'

export default function SellingProducts({ pog, spp, cp, ipn }) {
   const dummyPhotoArray = [pog[0], pog[1], pog[2], pog[3], pog[4]]
   const [photo, setPhoto] = useState(0)
   const switchPhoto = (ops) => {
      if(ops === "-" && photo > 0) { setPhoto(photo - 1) }
      else if(ops === "+" && photo < 4) { setPhoto(photo + 1) }
   }
   return(
      <div className={"displayColumn " + css.sellingProducts}>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Inventory</span>
            <div className={"displayColumn " + css.sellingProductsForm}>
               <span className={css.sellingProductsLabel}>Name of goods</span>
               <Input cls={css.sellingProductsInput} plcHldr="Masukkan nama barang" type="text"/>
            </div>
         </div>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Item details</span>
            <div className={"displayColumn " + css.sellingProductsForm}>
               <div className={"displayColumn"}>
                  <span className={css.sellingProductsLabel}>Unit price</span>
                  <Input cls={css.sellingProductsInput} plcHldr="Masukkan harga barang" type="text"/>
               </div>
               <div className={"displayColumn " + css.sellingProductsStock}>
                  <span className={css.sellingProductsLabel}>Stock</span>
                  <Input cls={css.sellingProductsInput} plcHldr="Masukkan stok barang" type="text"/>
               </div>
               
               <div className={"displayColumn"}>
                  <span className={css.sellingProductsLabel}>Stock</span>
                  <div className={"displayRow " + css.myProfileLeftSideSetupSpaceMobile}>
                     <div className="displayRow">
                        <div className={"hoverThis " + css.myProfileRadioButton} onClick={ () => { ipn(true) } }>
                           <div className={css.myProfileInsideRadioButton} style={cp === true ? {background: "#273AC7"} : null}/>
                        </div>
                        <span className={css.myProfileGender}>Baru</span>
                     </div>
                     <div className="displayRow">
                        <div className={"hoverThis " + css.myProfileRadioButton} onClick={ () => { ipn(false) } }>
                           <div className={css.myProfileInsideRadioButton} style={cp === false ? {background: "#273AC7"} : null}/>
                        </div>
                        <span className={css.myProfileGender}>Bekas</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Photo of goods</span>
            <div className={"displayColumn " + css.sellingProductsForm}>
               <div className={"displayColumn " + css.uploadPhotoArea}>
                  <div className="displayRow" style={{justifyContent: "space-between"}}>
                     <img alt="Photo" className={"hoverThis " + css.mainPhoto} onClick={ () => { spp(0) } } src={dummyPhotoArray[0]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} onClick={ () => { spp(1) } } src={dummyPhotoArray[1]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} onClick={ () => { spp(2) } } src={dummyPhotoArray[2]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} onClick={ () => { spp(3) } } src={dummyPhotoArray[3]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} onClick={ () => { spp(4) } } src={dummyPhotoArray[4]}/>
                  </div>
                  <span className={css.fotoUtama}>Foto utama</span>
                  <div className={css.uploadBtnArea}>
                     <Button btnClr="white" cls={css.uploadPhotoBtn} ftClr="#9B9B9B" val="Upload photo"/>
                  </div>
               </div>
               <div className={"displayColumn " + css.uploadPhotoAreaMobile}>
                  <div className="displayRow" style={{justifyContent: "space-between"}}>
                     <img alt="Arrow" className={css.arrowSwitch} onClick={ () => { switchPhoto("-") } } src={Left} style={ photo < 1 ? { opacity: "0.11" } : null}/>
                     <img alt="Photo" className={photo === 0 ? css.mainPhoto : css.otherPhoto} onClick={ () => { spp(photo) } } src={dummyPhotoArray[photo]}/>
                     <img alt="Arrow" className={css.arrowSwitch} onClick={ () => { switchPhoto("+") } } src={Right} style={ photo > 3 ? { opacity: "0.11" } : null}/>
                  </div>
                  {photo === 0 ? <span className={css.fotoUtama}>Foto utama</span> : null}
                  <Button btnClr="white" cls={css.uploadPhotoBtnMobile} ftClr="#9B9B9B" val="Upload photo"/>
               </div>
            </div>
         </div>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Description</span>
            <div className={"displayColumn " + css.sellingProductsFormDescription}>
               <img alt="Dummy Button" className={css.dummyBtn} src={SellingProductDescription}/>
               <textarea className={css.descriptionTextarea}/>
            </div>
         </div>
         <Button btnClr="#273AC7" cls={css.sellBtn} ftClr="white" val="Jual"/>
      </div>
   )
}