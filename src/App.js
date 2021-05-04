import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// IMPORT PAGES
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ConfirmPassword from './pages/ConfirmPassword'
import Home from './pages/Home'
import MyBag from './pages/MyBag'
// REDUX (BELAKANGAN)
import { Provider } from 'react-redux'
import store from './configs/redux/Store'

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/reset" component={ResetPassword}/>
          <Route path="/confirm" component={ConfirmPassword}/>
          <Route path="/bag" component={MyBag}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    // </Provider>
  )
}

export default App
