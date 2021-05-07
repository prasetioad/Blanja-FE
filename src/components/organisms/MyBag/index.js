import {useState, useEffect} from 'react'
import style from './mybag.module.css'
import {mybagjacket} from '../../images'
import {AiOutlineMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import axios from 'axios'
import { Navbar } from '..'

function MyBag() {
  const [value, setValue] = useState(1)
  
  const price = 20.00 * value
  const totalPrice = price

  const [getProduct, setGetProduct] = useState([])
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      const dataAllProduct = res.data
      // console.log(dataAllProduct);
      setGetProduct(dataAllProduct)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  const handleBuy = () =>{
    
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <p className={style["title-mybag"]}>My bag</p>
        <div className="row">
          <div className="col-lg">
            <label className={style["select-all-items"]}>
              <input  type="checkbox" name="selectall" /> 
              Select all items (2 items selected)
            </label>
            
            {getProduct !== undefined ? getProduct.map((item)=>{
            return (
            <>
            <div className="row mt-4">
              <div className="col d-flex">
                <div className={style["select-items"]}>
                  <div className="row">
                    <div className="col-lg-3 col-6 ml-3">
                      <label >
                        <input  type="checkbox" name="selectall" /> 
                        <img className={style["item-selected"]} src={mybagjacket} alt=""/>
                      </label>
                    </div>
                    <div className="col">
                      <p className={style["item-name"]}>{item.name}</p>
                      <p className={style["store-name"]}>Zalora Cloth</p>
                    </div>
                    <div className="col d-flex mt-4 mr-lg-5 ml-lg-0 ml-5">
                      <AiOutlineMinusCircle 
                        size="30" 
                        className={style["min-icon"]} 
                        onClick={() => setValue(value -1)}
                      />
                      <p className={style["value"]}>{value}</p>
                      <AiFillPlusCircle 
                        size="30" 
                        className={["plus-icon"]} 
                        onClick={() => setValue(value +1)}
                      />
                      <p className={style["price"]}>$ {price*value}.00</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            </>
            )
            }) : console.log("try again")} 
            
            
          </div>
          <div className="col-lg-4 mb-5">
            <div className={style["box-sum"]}>
              <p className={style["shop-summary-teks"]}>Shopping summary</p>
              <br/>
              <p className={style["total-price"]}>Total Price</p>
              <p className={style["price-value"]}>$ {totalPrice}.0</p>
              <br/>
              <button 
                type="button" 
                className={style["btn-buy"]}
                onClick={handleBuy}  
              >Buy</button>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBag
