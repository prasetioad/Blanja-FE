import {useState, useEffect} from 'react'
import style from './tshirt.module.css'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import {tshirt} from '../../../images'

function Tshirt() {
  const [getTshirt, setGetTshirt] = useState([])
  // Untuk Banyaknya rating/bintang
  const [rating, setRating] =useState(null)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      const dataAllThsirt = res.data
      console.log(dataAllThsirt);
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
          <div className="col-lg-3 mb-5" >
            <div className={style["card"]}>
              <img className={[["card-img-top"], style["product-img"]].join(' ')} src={tshirt} alt=""/>
              <div className="card-body">
                <p className={style["product-name"]}>{item.username}</p>
                <p className={style["price"]}>$ 40.0</p>
                <p className={style["teks-store"]}>Zalora Cloth</p>
                {[...Array(5)].map((star, i)=>{
                  const ratingValue = i + 1;
                  return (
                    <>
                   
                    <FaStar 
                      className={style["star"]} 
                      size={25}
                      color={ratingValue <= (rating) ? '#FFBA49' : '#D4D4D4'}
                      
                    />
                   {/* <img className={style["rating"]} src="" alt=""/> */}
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
