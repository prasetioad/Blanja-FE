import {useState, useEffect} from 'react'
import style from './popularhome.module.css'
import axios from 'axios'

function PopularHome() {
  const [getNewProduct, setGetNewProduct] = useState([])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      const dataNewProduct = res.data
      console.log(dataNewProduct);
      setGetNewProduct(dataNewProduct)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <div className="container">
       <p className={style["title"]}>Popular</p>
       <p className={style["teks"]}>Find clothes that are trending recently</p>
       <div className="row">
        {getNewProduct !== undefined ? getNewProduct.map((item)=>{
        return (
        <>
        <div className="col-2.5 ml-3 mb-5" key={item.index}>
          <div className={style["card"]}>
            <img className={[["card-img-top"], style["product-img"]].join(' ')} src="https://www.fashionrevolution.org/wp-content/uploads/2020/11/gez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg" alt=""/>
            <div className="card-body">
              <p className={style["product-name"]}>{item.username}</p>
              <p className={style["price"]}>$ 40.0</p>
              <p className={style["teks-store"]}>Zalora Cloth</p>
              <img className={style["rating"]} src="https://www.flaticon.com/svg/vstatic/svg/786/786230.svg?token=exp=1620118115~hmac=a4e96f09c345196119a6f8470b55151f" alt=""/>
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

export default PopularHome
