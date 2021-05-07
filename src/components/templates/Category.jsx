import { Navbar, Tshirt, Jacket } from '../organisms'

export default function Category({param}) {
   return(
      <div style={{background: "#F9F9F9"}}>
         <Navbar/>
         {param == 'tshirt' ?
         <Tshirt /> :
         param == 'jacket' ?
         <Jacket /> :
         // param == 'shoes' ?
         // <Shoes /> :
         // param == 'pants' ?
         // <Pants /> :
         // param == 'short' ?
         // <Short /> :
         <div style={{marginLeft: '30vw', marginTop: '15vw'}}>
            <h1>Oopss! no data for {param} category...</h1>
         </div>
      }
      </div>
   )
}