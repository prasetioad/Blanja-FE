import css from './profileUser.module.css';
import Swal from 'sweetalert2'
// ATOMS
import { Button } from '../../../atoms';

export default function ShippingAddress({ func }) {
   return(
      <div className={"displayColumn " + css.rightSideUserProfile}>
         <div className={"displayColumn " + css.rightSideUserTitle}>
            <span className={css.rightSideUserTitleBigText}>Choose another address</span>
            <span className={css.rightSideUserTitleSmallText}>Manage your shipping address</span>
         </div>
         <div className={"displayColumn " + css.insideAddressArea}>
            <Button btnClr="white" cls={css.addNewAddressBtn} ftClr="#9B9B9B" func={func} val ="Add new address"/>
            <div className={"displayColumn " + css.changeAddressArea}>
               <span className={css.changeAddressPeopleName}>Andreas Jane</span>
               <span className={css.changeAddressLocation}>
                  Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, 
                  Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, 
                  Kab. Banyumas, 53181
               </span>
               <span 
                  className={"hoverThis " + css.changeAddressBtn} 
                  onClick={ () => { 
                     Swal.fire(
                        "Sukses!", 
                        "Alamat pengiriman barang/paket berhasil di ganti ~",
                        "success"
                     )} 
                  }> Change address </span>
            </div>
         </div>
      </div>
   )
}