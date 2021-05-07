import { Helmet } from 'react-helmet'
import './style.css'
import MyBag from '../../components/organisms/MyBag'
import Home from '../../components/templates/Home'

export default function MyBagPage(){
   return(

      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - My Bag</title>
         </Helmet>
         <div className="displayColumn inDevelopment">
            {/* <h1>My Bag - In Development</h1> */}
         </div>
         {/* <Home /> */}
         <MyBag />
      </div>
   )
}