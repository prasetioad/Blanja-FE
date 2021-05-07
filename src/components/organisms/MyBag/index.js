import { useState, useEffect } from 'react'
import style from './mybag.module.css'
import { mybagjacket } from '../../images'
import { AiOutlineMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import axios from 'axios'
import { Navbar } from '..'
import Swal from 'sweetalert2'

function MyBag() {

  const [product, setProduct] = useState([])
  const [countSelected, setCountSelected] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const newProduct = res.data
        setProduct(
          newProduct.map((d) => {
            return {
              select: false,
              id: d.id,
              title: d.name,
              store: d.username,
              price: d.id,
              totalBuy: 1
            }
          })
        )
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })

  }, [])

  const countPrice = () => {
    let sum = 0
    product.forEach((value) => {
      sum += parseInt(value.price)
    })
    setTotalPrice(sum)
  }
  const countSelect = () => {
    let c = 0
    for(let i = 0; i < product.length; i++){
      if(product[i].select === true) {
        c++
      }
    }
    setCountSelected(c)
  }


  const handleBuy = () => {

  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <p className={style["title-mybag"]}>My bag</p>
        <div className="row">
          <div className="col-lg">
            <label className={style["select-all-items"]}>
              <input
                type="checkbox"
                id="selectall"
                onChange={(e) => {
                  let checked = e.target.checked
                  setProduct(
                    product.map((d) => {
                      d.select = checked;
                      return d;
                    })
                  )
                  countSelect()
                }}
              />
              Select all items ( {countSelected} items selected)
            </label>

            {product.map((item) => {
              return (
                <>
                  <div className="row mt-4">
                    <div className="col d-flex">
                      <div className={style["select-items"]}>
                        <div className="row">
                          <div className="col-lg-3 col-6 ml-3">
                            <label >
                              <input type="checkbox"
                                checked={item.select}
                                onChange={(e) => {
                                  let checked = e.target.checked;
                                  setProduct(
                                    product.map((data) => {
                                      if (item.id === data.id) {
                                        data.select = checked;
                                        countSelect();
                                      }
                                      return data;
                                    })
                                  )

                                }}
                              />
                              <img className={style["item-selected"]} src={mybagjacket} alt="" />
                            </label>
                          </div>
                          <div className="col">
                            <p className={style["item-name"]}>{item.title}</p>
                            <p className={style["store-name"]}>{item.store}</p>
                          </div>
                          <div className="col d-flex mt-4 mr-lg-5 ml-lg-0 ml-5">
                            <AiOutlineMinusCircle
                              size="30"
                              className={style["min-icon"]}
                              onClick={(e) => {
                                setProduct(
                                  product.map((data) => {
                                    if (item.id === data.id) {
                                      if (item.totalBuy > 1) {
                                        data.totalBuy = data.totalBuy - 1;
                                      } else {
                                        Swal.fire({
                                          title: 'Do you want to delete this item from you bag?',
                                          showConfirmButton: false,
                                          showDenyButton: true,
                                          showCancelButton: true,
                                          denyButtonText: `yes please!`,
                                        }).then((result) => {
                                          if (result.isDenied) {
                                            Swal.fire("oops... this feature are not developed yet", '', 'info')
                                          }
                                        })
                                      }
                                    }
                                    return data
                                  })
                                )
                              }}
                            />
                            <p className={style["value"]}>{item.totalBuy}</p>
                            <AiFillPlusCircle
                              size="30"
                              className={["plus-icon"]}
                              onClick={(e) => {
                                setProduct(
                                  product.map((data) => {
                                    if (item.id === data.id) {
                                      data.totalBuy = data.totalBuy + 1;
                                      
                                    }
                                    return data
                                  })
                                )
                                countPrice()
                              }}
                            />
                            <p className={style["price"]}>
                              {item.totalBuy !== 0 ?
                                "$ " + item.price * item.totalBuy + ".00"
                                : "$ " + item.price + ".00"
                              }
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </>
              )
            })}


          </div>
          <div className="col-lg-4 mb-5">
            <div className={style["box-sum"]}>
              <p className={style["shop-summary-teks"]}>Shopping summary</p>
              <br />
              <p className={style["total-price"]}>Total Price</p>
              <p className={style["price-value"]}>
                $ {totalPrice}.0
                </p>
              <br />
              <button
                type="button"
                className={style["btn-buy"]}
                onClick={handleBuy}
              >Buy</button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBag
