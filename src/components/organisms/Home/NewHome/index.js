import { useState, useEffect } from "react";
import style from "./newhome.module.css";
import axios from "axios";
import { FaStar } from 'react-icons/fa'
import {tshirt} from '../../../images'

function NewHome() {
  const [getNewProduct, setGetNewProduct] = useState([]);
  // Untuk Banyaknya rating/bintang
  const [rating, setRating] =useState(null)


  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      const dataNewProduct = res.data
      // console.log(dataNewProduct);
      setGetNewProduct(dataNewProduct)
      
      setRating(5) 
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <div className="container">

       <p className={style["title"]}>New</p>
       <p className={style["teks"]}>You’ve never seen it before!</p>
       <div className="row">
        {getNewProduct !== undefined ? getNewProduct.map((item)=>{
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
                {/* <img className={style["rating"]} src="https://www.flaticon.com/svg/vstatic/svg/786/786230.svg?token=exp=1620118115~hmac=a4e96f09c345196119a6f8470b55151f" alt=""/> */}
              </div>
            </div>
          </div>
        </>
        );
        })
        : console.log("try again")}

        </div>
      </div>
    </div>
  );
}

export default NewHome;
