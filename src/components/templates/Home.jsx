import { useState } from 'react'
// ORGANISMS
import { Navbar } from '../organisms'
import { Filter } from '../organisms'

export default function Home() {
   const [filter, showFilter] = useState(false)
   return(
      <div style={{background: "#E5E5E5", height: "200vh"}}>
         <Navbar func={ () => { showFilter(true) } }/>
         {filter === true ?
         <Filter func={ () => {showFilter(false)} }/>
         : 
         null}

      </div>
   )
}