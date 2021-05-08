import { useState, useEffect } from "react";
import style from "./popularhome.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router";

function PopularHome() {
  const [getNewProduct, setGetNewProduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/product/popular?perPage=8`)
      .then((res) => {
        const dataNewProduct = res.data.data;
        setGetNewProduct(dataNewProduct);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }, []);

  return (
    <div>
      <div className="container">
        <p className={style["title"]}>Popular</p>
        <p className={style["teks"]}>Find clothes that are trending recently</p>
        <div className="row">
          {getNewProduct !== undefined
            ? getNewProduct.map((item) => {
                return (
                  <>
                    <div className="col-lg-3 col-6 mb-5">
                      <div
                        className={style["card"]}
                        onClick={() => {
                          history.push(`./product/${item.id}`);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          className={[
                            ["card-img-top"],
                            style["product-img"],
                          ].join(" ")}
                          src={`${process.env.REACT_APP_API_IMG}${item.image}`}
                          alt=""
                        />
                        <div className="card-body">
                          <p className={style["product-name"]}>{item.title}</p>
                          <p className={style["price"]}>Rp {item.price}</p>
                          <p className={style["teks-store"]}>{item.brand}</p>
                          {Array.from(Array(item.rating).keys()).map(
                            (item, index) => {
                              return (
                                <FaStar
                                  className={style["star"]}
                                  size={25}
                                  color={"#FFBA49"}
                                  key={index}
                                />
                              );
                            }
                          )}
                          <span> ({item.rating})</span>
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

export default PopularHome;
