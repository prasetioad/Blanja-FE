import './style.css'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
// ATOMS
import { Profile } from '../../components/templates'
// IMAGES
import Default from '../../components/images/PhotoOfGoods.png'

export default function ProfilePage(){
   // SET-UP STATE
   const [userData, setUserData] = useState({name: "Anonymous"})
   const [menuSelected, selectMenu] = useState(null)
   const [myOrderUserSelected, selectMyOrderUser] = useState("All items")
   const [myOrderStoreSelected, selectMyOrderStore] = useState("All items")
   const [myProductMenuSelected, selectMyProductMenu] = useState("All items")
   const [checkProduct, isProductNew] = useState(true)
   const [newAddress, addNewAddress] = useState({save: null, name: null, phone: null, address: null, code: null, city: null})
   const [avatarUser, setUpdateImage] = useState("https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif")
   // FUNCTIONS
   const userDataChange = (e) => { setUserData({...userData, [e.target.name]: e.target.value}) }
   const newAddressChange = (e) => { addNewAddress({...newAddress, [e.target.name]: e.target.value}) }
   // PHOTO OF GOODS
   const [mainPhoto, setMain] = useState(Default)
   const [secondPhoto, setSecond] = useState(Default)
   const [thirdPhoto, setThird] = useState(Default)
   const [fourthPhoto, setFourth] = useState(Default)
   const [fifthPhoto, setFifth] = useState(Default)
   const setProductPhoto = (num) => {
      Swal.fire({
         icon: "info",
         title: "Change Avatar",
         text: "Silahkan pilih sebuah gambar dari komputer-mu untuk dijadikan gambar produk jualan kamu :", 
         input: 'file',
         inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
         },
         confirmButtonText: 'Upload',
         showCancelButton: true,
         closeOnConfirm: false,
         animation: "slide-from-top"
         })
      .then((res) => {
         if(res.value === null){ 
            Swal.fire({
               icon: "question",
               title: "Kosong ?!", 
               text: "Gimana uploadnya nih kalau gambarnya gak ada? XD",
               })
          }
         else{
            const packValue = res.value
            const data = new FormData()
            data.append("user_image", res.value)       
            const reader = new FileReader()
            reader.addEventListener("load", () => {
               if(num === 0) { setMain(reader.result) }
               else if(num === 1) { setSecond(reader.result) }
               else if(num === 2) { setThird(reader.result) }
               else if(num === 3) { setFourth(reader.result) }
               else if(num === 4) { setFifth(reader.result) }
            })
            reader.readAsDataURL(packValue)
         }
      })
      .catch((err) => {
         Swal.fire({
            icon: "error",
            title: "Batal~", 
            text: "Penambahan gambar produk dibatalkan ~",
            })
      })
   }
   // CHANGE AVATAR
   const changeAvatarUser = () => {
      Swal.fire({
         icon: "info",
         title: "Change Avatar",
         text: "Silahkan pilih sebuah gambar dari komputer-mu untuk dijadikan Profile Picture baru kamu :", 
         input: 'file',
         inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
         },
         confirmButtonText: 'Upload',
         showCancelButton: true,
         closeOnConfirm: false,
         animation: "slide-from-top"
         })
      .then((res) => {
         if(res.value === null){ 
            Swal.fire({
               icon: "question",
               title: "Kosong ?!", 
               text: "Gimana uploadnya nih kalau gambarnya gak ada? XD",
               })
          }
         else{
         const packValue = res.value
         const data = new FormData()
         data.append("user_image", res.value)
         const reader = new FileReader()
         reader.addEventListener("load", () => {
         setUpdateImage(reader.result)
         })
         reader.readAsDataURL(packValue)
         }
      })
      .catch((err) => {
         Swal.fire({
            icon: "error",
            title: "Batal~", 
            text: "Perubahan gambar profile user dibatalkan!",
            })
         console.log(err)
      })
   }
   // REACT HOOKS - USE EFFECT
   useEffect(() => {
      axios.get(process.env.REACT_APP_API_URL + "/users/find-one", {
        headers: { authorization: 'Bearer ' + localStorage.getItem("token"), 'Content-Type': 'application/json' }
      })
      .then((res) => { 
         const data = res.data.data[0]
         setUserData(data)
         setUpdateImage(data.image)
         if(data.role === 1) { selectMenu("Store Profile") }
         else if(data.role === 2) { selectMenu("My Account") }
      })
      .catch((err) => { console.log(err.response) })
    }, [])
    console.log(userData)
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Profile</title>
         </Helmet>
         <Profile 
            ms={menuSelected}
            mous={myOrderUserSelected} 
            moss={myOrderStoreSelected} 
            mpms={myProductMenuSelected}
            sm={ (e) => { selectMenu(e.target.getAttribute("name")) } } 
            smoud={ (e) => { selectMyOrderUser(e.target.innerText) } }
            smoum={ (val) => { selectMyOrderUser(val) } }
            smosd={ (e) => { selectMyOrderStore(e.target.innerText) } }
            smosm={ (val) => { selectMyOrderStore(val) } }
            smpmd={ (e) => { selectMyProductMenu(e.target.innerText) } }
            smpmm={ (val) => { selectMyProductMenu(val) } }
            na={newAddress}
            nac={ (e) => { newAddressChange(e) } }
            rea={ () => { addNewAddress({save: "", name: "", phone: "", address: "", code: "", city: ""}) } }
            sg={ (e) => { setUserData({...userData, gender: e.target.id}) } }
            udc={ (e) => { userDataChange(e) } }
            cau={ () => { changeAvatarUser() } }
            au={avatarUser}
            pog={[mainPhoto,secondPhoto,thirdPhoto,fourthPhoto,fifthPhoto]}
            spp={ (val) => { setProductPhoto(val) } }
            cp={checkProduct}
            ipn={ (val) => {isProductNew(val)} }
            ud={userData}
         />
      </div>
   )
}