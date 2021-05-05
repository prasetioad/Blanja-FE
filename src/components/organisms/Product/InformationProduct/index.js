import {useState, useEffect} from 'react'
import style from './information.module.css'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

function InformationProfuct() {
  const [getProductInfo, setGetProductInfo] = useState([])
  const [rating, setRating] =useState(null)
  const [hover, setHover] = useState(null)
  // console.log(rating, 'ratingnya');

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((res)=>{
      const dataProductInfo = res.data
      // console.log(dataProductInfo);
      setGetProductInfo(dataProductInfo)
      
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <div className="container">
        <p className={style["title-information"]}>Product Information </p>
        <p className={style["condition-prod"]}>Condition</p>
        <p className={style["condition-value"]}>New</p>

        <p className={style["description-title"]}>Description</p>
        
        <p className={style["description-prod"]}>{getProductInfo.body}  </p>

        <p className={style["review-title"]}>Product Review</p>
        <p className={style["rating-value"]}>{rating}.0 /5.0</p>
        {[...Array(5)].map((star, i)=>{
          const ratingValue = i + 1;
          return (
            <label >
              <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=>setRating(ratingValue)}
                key={i}
              />
              <FaStar 
                className={style["star"]} 
                size={35}
                color={ratingValue <= (hover || rating) ? '#FFBA49' : '#D4D4D4'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          ) 
        })}
        <div className={style["line-width"]}></div>
        
      </div>
    </div>
  )
}

export default InformationProfuct
