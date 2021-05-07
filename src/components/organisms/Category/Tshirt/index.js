import {useState, useEffect} from 'react'
import style from './tshirt.module.css'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { useHistory } from 'react-router'

function Tshirt() {
  const history = useHistory()
  const [getTshirt, setGetTshirt] = useState([])
  // Untuk Banyaknya rating/bintang
  const [rating, setRating] =useState(null)

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/product/category/1`)
    .then((res)=>{
      const dataAllThsirt = res.data.data
      // console.log(dataAllThsirt);
      setGetTshirt(dataAllThsirt)
     
      setRating(4) 
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <div className="container">
        <p className={style["navigation"]}>Home - Category - Tshirt</p>
        <p className={style["title"]}>T-Shirt</p>
        <div className="row">
          {getTshirt !== undefined ? getTshirt.map((item)=>{
          return (
          <>
          <div className="col-lg-3 col-6 mb-5" >
            <div className={style["card"]} onClick={()=>{ history.push('/product')}}>
              <img className={[["card-img-top"], style["product-img"]].join(' ')} src={`${process.env.REACT_APP_API_IMG}${item.image}`} alt=""/>
              <div className="card-body">
                <p className={style["product-name"]}>{item.title}</p>
                <p className={style["price"]}>Rp {item.price}</p>
                <p className={style["teks-store"]}>{item.brand}</p>
                {[...Array(5)].map((star, i)=>{
                  const ratingValue = i + 1;
                  return (
                    <>
                    <FaStar 
                      className={style["star"]} 
                      size={25}
                      color={ratingValue <= (rating) ? '#FFBA49' : '#D4D4D4'}
                    />
                  </>
                  ) 
                })}
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

export default Tshirt
