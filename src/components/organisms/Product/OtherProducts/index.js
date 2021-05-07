import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import style from './otherproducts.module.css'
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa'

function OtherProducts({ product }) {
  const urlApi = process.env.REACT_APP_API_URL;
  const urlImg = process.env.REACT_APP_API_IMG;

  const history = useHistory();


  const [getNewProduct, setGetNewProduct] = useState([])
  const [rating, setRating] =useState(null)

  useEffect(() => {
    if (product) {
      if (product.category === "T-Shirt") {
        axios.get(`${urlApi}/product/category/1`)
          .then((res) => {
            const dataNewProduct = res.data.data
            setGetNewProduct(dataNewProduct)

          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          })
      } else if (product.category === "Shorts") {
        axios.get(`${urlApi}/product/category/2`)
          .then((res) => {
            const dataNewProduct = res.data.data
            setGetNewProduct(dataNewProduct)

          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          })
      } else if (product.category === "Jacket") {
        axios.get(`${urlApi}/product/category/3`)
          .then((res) => {
            const dataNewProduct = res.data.data
            setGetNewProduct(dataNewProduct)

          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          })
      } else if (product.category === "Pants") {
        axios.get(`${urlApi}/product/category/4`)
          .then((res) => {
            const dataNewProduct = res.data.data
            setGetNewProduct(dataNewProduct)

          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          })
      } else if (product.category === "Shoes") {
        axios.get(`${urlApi}/product/category/5`)
          .then((res) => {
            const dataNewProduct = res.data.data
            setGetNewProduct(dataNewProduct)

          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          })
      }
    }

  }, [])

  return (
    <div>
      <div className="container">
        <h2 className={style["title"]}>You can also like this</h2>
        <p className={style["teks"]}>You’ve never seen it before!</p>
        <div className="row">
          {getNewProduct.map((item) => {
            return (
              <div className="col-lg-3 col-6 mb-5" key={item.id} onClick={(e)=>history.push(`/product/${item.id}`)}>
                <div className={style["card"]}>
                  <img className={[["card-img-top"], style["product-img"]].join(' ')} src={`${urlImg}${item.image}`} alt="image" />
                  <div className={[style["card-body"], ["card-body"]].join(" ")}>
                    <h3 className={style["product-name"]}>{item.title}</h3>
                    <h4 className={style["price"]}>Rp {item.price}</h4>
                    <p className={style["teks-store"]}>{item.brand}</p>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OtherProducts
