import { Helmet } from 'react-helmet'
import './style.css'
// ATOMS
import { Button } from '../../components/atoms'

export default function Login(){
   return(
      <div className="showInAnimation">
         <Helmet>
            <title>Blanja - Login</title>
         </Helmet>
         <div className="displayColumn inDevelopment">
            <h1>Login - In Development</h1>
            <Button cls="loginBtn" btnClr="#273AC7" ftClr="white" val="Login"/>
         </div>
      </div>
   )
}