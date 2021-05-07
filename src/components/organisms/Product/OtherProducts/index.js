import {useState, useEffect} from 'react'
import axios from 'axios'
import style from './otherproducts.module.css'
import {tshirt, jacket} from '../../../images'

function OtherProducts() {
  const [getNewProduct, setGetNewProduct] = useState([])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      const dataNewProduct = res.data
      // console.log(dataNewProduct);
      setGetNewProduct(dataNewProduct)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
  
  return (
    <div>
      <div className="container">
        <p className={style["title"]}>You can also like this</p>
        <p className={style["teks"]}>You’ve never seen it before!</p>
        <div className="row">
          {getNewProduct !== undefined ? getNewProduct.map((item)=>{
          return (
          <>
          <div className="col-lg-3 col-6 mb-5" >
            <div className={style["card"]}>
              <img className={[["card-img-top"], style["product-img"]].join(' ')} src={tshirt} alt="image"/>
              <div className="card-body">
                <p className={style["product-name"]}>{item.username}</p>
                <p className={style["price"]}>$ 40.0</p>
                <p className={style["teks-store"]}>Zalora Cloth</p>
              </div>
            </div>
          </div>
          </>
          )
          }) : console.log("try again")} 
        </div>
        </div>
    </div>
  )
}

export default OtherProducts
