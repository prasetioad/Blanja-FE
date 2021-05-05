import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// IMPORT PAGES
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ConfirmPassword from './pages/ConfirmPassword'
import Home from './pages/Home'
import MyBag from './pages/MyBag'
import Corousel from './components/organisms/Home/Corousel 1/index'
import Product from './pages/Product'
import Category from './pages/Category'
// REDUX (BELAKANGAN)
import { Provider } from 'react-redux'
import store from './configs/redux/Store'

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/test" component={Corousel}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/reset" component={ResetPassword}/>
          <Route path="/confirm" component={ConfirmPassword}/>
          <Route path="/bag" component={MyBag}/>
          <Route path="/product" component={Product}/>
          <Route path="/category" component={Category} />
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    // </Provider>
  )
}

export default App
