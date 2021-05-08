import css from './profileStore.module.css';
import { useState } from 'react'
// ATOMS
import { Button, Input } from '../../../atoms'
// IMAGES
import SellingProductDescription from '../../../images/SellingProductDescription.png'
import DefaultPhoto from '../../../images/PhotoOfGoods.png'
import Left from '../../../images/left.png'
import Right from '../../../images/right.png'
import { useEffect } from 'react';
import axiosApiInstance from '../../../../helpers/axios';

export default function SellingProducts({ pog, spp, cp, ipn }) {
   const [data, setData] = useState({
      title: null,
      price: null,
      stock: null,
      conditions: null,
      description: null,
      size: ['28','29','30','31','32'],
      color: ['Cod Gray','Valencia', 'Havelock Blue', 'Emerald'],
      ...pog
   })
   const dummyPhotoArray = [pog[0], pog[1], pog[2], pog[3], pog[4]]
   const [photo, setPhoto] = useState(0)
   const switchPhoto = (ops) => {
      if(ops === "-" && photo > 0) { setPhoto(photo - 1) }
      else if(ops === "+" && photo < 4) { setPhoto(photo + 1) }
   }
   const handleChange=(e)=>{
      const target = e.target
      const nm = target.name
      const value = target.value
      setData({
         ...data,
         [nm]:value
      })
   }
   const jual =()=>{
      const objek = new FormData()
      objek.append('title',data.title)
      objek.append('price',data.price)
      objek.append('stock',data.stock)
      objek.append('conditions',data.condition)
      objek.append('description',data.description)
      objek.append('color',data.color)
      objek.append('size',data.size)
      pog.map((item)=>{
         objek.append('image',item)
      })
      axiosApiInstance.post(`${process.env.REACT_APP_API_URL}/store`, objek)
      .then((res)=>{
         console.log(res);
      })
      .catch((err)=>{
         console.log(err.response);
      })
   }
   console.log(data);
   return(
      <div className={"displayColumn " + css.sellingProducts}>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Inventory</span>
            <div className={"displayColumn " + css.sellingProductsForm}>
               <span className={css.sellingProductsLabel}>Name of goods</span>
               <Input cls={css.sellingProductsInput} plcHldr="Masukkan nama barang" type="text" nm='title' onCg={(e) =>{ handleChange(e)}}/>
            </div>
         </div>
         <div className={"displayColumn " + css.insideSellingProducts}>
            <span className={css.sellingProductsTitle}>Item details</span>
            <div className={"displayColumn " + css.sellingProductsForm}>
               <div className={"displayColumn"}>
                  <span className={css.sellingProductsLabel}>Unit price</span>
                  <Input cls={css.sellingProductsInput} plcHldr="Masukkan harga barang" nm='price' type="text" onCg={(e) =>{ handleChange(e)}}/>
               </div>
               <div className={"displayColumn " + css.sellingProductsStock}>
                  <span className={css.sellingProductsLabel}>Stock</span>
                  <Input cls={css.sellingProductsInput} plcHldr="Masukkan stok barang" type="text" nm='stock' onCg={(e) =>{ handleChange(e)}}/>
               </div>
               
               <div className={"displayColumn"}>
                  <span className={css.sellingProductsLabel}>Stock</span>
                  <div className={"displayRow " + css.myProfileLeftSideSetupSpaceMobile}>
                     <div className="displayRow">
                        <div className={"hoverThis " + css.myProfileRadioButton} onClick={ () => { setData({...data, conditions: 'baru'})
                           ipn(true) } }>
                           <div className={css.myProfileInsideRadioButton} style={cp === true ? {background: "#273AC7"} : null}/>
                        </div>
                        <span className={css.myProfileGender}>Baru</span>
                     </div>
                     <div className="displayRow">
                        <div className={"hoverThis " + css.myProfileRadioButton} onClick={ () => { setData({...data, conditions: 'bekas'})
                           ipn(false) } }>
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
                     <img alt="Photo" className={"hoverThis " + css.mainPhoto} name='image1'  onClick={ () => { spp(0) } } src={dummyPhotoArray[0]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} name='image2'  onClick={ () => { spp(1) } } src={dummyPhotoArray[1]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} name='image3'  onClick={ () => { spp(2) } } src={dummyPhotoArray[2]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} name='image4'  onClick={ () => { spp(3) } } src={dummyPhotoArray[3]}/>
                     <img alt="Photo" className={"hoverThis " + css.otherPhoto} name='image5'  onClick={ () => { spp(4) } } src={dummyPhotoArray[4]}/>
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
               <textarea className={css.descriptionTextarea} name='description' onChange={(e)=>{handleChange(e)}}/>
            </div>
         </div>
         <Button btnClr="#273AC7" cls={css.sellBtn} ftClr="white" val="Jual" func={()=>{jual()}}/>
      </div>
   )
}