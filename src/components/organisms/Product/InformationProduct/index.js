import { useState } from 'react'
import style from './information.module.css'
import { FaStar } from 'react-icons/fa'

function InformationProduct({ product }) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  
  

  return (
    <div>
      <div className="container">
        <p className={style["title-information"]}>Product Information </p>
        <p className={style["condition-prod"]}>Condition</p>
        <p className={style["condition-value"]}>{product.conditions}</p>

        <p className={style["description-title"]}>Description</p>

        <p className={style["description-prod"]}>{product.description}  </p>

        <p className={style["review-title"]}>Product Review</p>
        <p className={style["rating-value"]}>{product.rating}.0 /5.0</p>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
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

export default InformationProduct
