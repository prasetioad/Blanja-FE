import { Helmet } from 'react-helmet'
import './style.css'

export default function MyBag(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - My Bag</title>
         </Helmet>
         <div className="displayColumn inDevelopment">
            <h1>My Bag - In Development</h1>
         </div>
      </div>
   )
}