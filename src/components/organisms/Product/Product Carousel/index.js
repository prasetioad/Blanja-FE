import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProductCarousel.css";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Button from "../../../atoms/Button";
import star from "../../../atoms/New folder/Star.png";
import { useDispatch } from "react-redux";
import {
  addColor,
  addType,
  addJumlah,
  addSize,
} from "../../../../configs/redux/actions/order";
import axios from "axios";
import Swal from "sweetalert2";
import {
  greencircle,
  redcircle,
  blackcircle,
  bluecircle,
} from "../../../images/index";

function Index({ product }) {
  const urlApi = process.env.REACT_APP_API_URL;
  const urlImg = process.env.REACT_APP_API_IMG;
  let { idproduct } = useParams();

  const dispatch = useDispatch();
  const [count, setcount] = useState(0);
  const [size, setsize] = useState(28);

  const [gallery, setGallery] = useState([]);
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    axios
      .get(`${urlApi}/product/image/${idproduct}`)
      .then((result) => {
        const newGallery = result.data.data;
        setGallery(newGallery);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  }, [idproduct, urlApi]);

  const handleSize = (data) => {
    if (data === "plus") {
      setsize(size + 1);
      dispatch(addSize(size + 1));
    } else {
      if (size > 0) {
        setsize(size - 1);
        dispatch(addSize(size - 1));
      }
    }
  };
  const handleCount = (data) => {
    if (data === "plus") {
      setcount(count + 1);
      console.log(count);
      dispatch(addJumlah(count + 1));
    } else {
      if (count > 0) {
        setcount(count - 1);
        dispatch(addJumlah(count - 1));
      }
    }
  };
  const handleColor = (data) => {
    dispatch(addColor(data));
  };
  const handleType = (data) => {
    dispatch(addType(data));
  };

  return (
    <div>
      <div className="productTopContent">
        <div className="productTopContentCarouselWrap">
          <div className="productTopCategoryRoute">
            <p>Home category T-Shirt</p>
          </div>
          <div className="productTopContentBody">
            <div className="productTopContetBodyLeft">
              <div className="productTopMainImage">
                <img
                  src={!mainImg ? `${urlImg}${product.image}` : mainImg}
                  alt="product"
                />
              </div>
              <div className="productTopContentTriggerImage">
                {gallery.map((item) => {
                  return (
                    <div
                      className="productTriggerImageItem"
                      key={item.id}
                      onClick={() => {
                        handleType("PX28");
                      }}
                    >
                      <img
                        src={`${urlImg}${item.image}`}
                        onClick={(e) => setMainImg(`${urlImg}${item.image}`)}
                        alt="product"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="productTopContentRight">
              <div className="productTopContentRightBody">
                <div className="productTopBotContent">
                  <p>{product.title}</p>
                  <span className="prodTextTiny">{product.brand}</span>
                </div>
                <div className="productTopBotContentStar">
                  <div className="prodStarTop">
                    <img src={star} alt="" />
                  </div>
                  <div className="prodStarTop">
                    <img src={star} alt="" />
                  </div>
                  <div className="prodStarTop">
                    <img src={star} alt="" />
                  </div>
                  <div className="prodStarTop">
                    <img src={star} alt="" />
                  </div>
                  <div className="prodStarTop">
                    <img src={star} alt="" />
                  </div>
                  <div className="prodStarTop">
                    <span>(5)</span>
                  </div>
                </div>
                <div className="productTopBotContentPrice">
                  <span className="prodTextTiny">Price</span>
                  <p>Rp. {product.price},-</p>
                </div>
                <div className="productTopBotContentColor">
                  <p>Color</p>
                  <div className="productTopBotContentColorItem">
                    <div className="ptbccItem">
                      <img
                        src={blackcircle}
                        alt=""
                        onClick={() => {
                          handleColor("black");
                        }}
                      />
                    </div>
                    <div className="ptbccItem">
                      <img
                        src={redcircle}
                        alt=""
                        onClick={() => {
                          handleColor("Red");
                        }}
                      />
                    </div>
                    <div className="ptbccItem">
                      <img
                        src={bluecircle}
                        alt=""
                        onClick={() => {
                          handleColor("Blue");
                        }}
                      />
                    </div>
                    <div className="ptbccItem">
                      <img
                        src={greencircle}
                        alt=""
                        onClick={() => {
                          handleColor("Green");
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="productSizeAndCount">
                  <div className="productSizeAndCountItem">
                    <span>size</span>
                    <div className="productSizeAndCountObjek">
                      <div className="prodStrip">
                        <FaMinusCircle
                          style={{ fontSize: "28px" }}
                          onClick={() => handleSize()}
                        />
                      </div>
                      <div className="prodSizeInput">
                        <p>{size}</p>
                      </div>
                      <div className="prodStrip">
                        <FaPlusCircle
                          style={{ fontSize: "28px" }}
                          onClick={() => handleSize("plus")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="productSizeAndCountItem">
                    <span>Jumlah</span>
                    <div className="productSizeAndCountObjek">
                      <div className="prodStrip">
                        <FaMinusCircle
                          style={{ fontSize: "28px" }}
                          onClick={() => handleCount()}
                        />
                      </div>
                      <div className="prodSizeInput">
                        <p>{count}</p>
                      </div>
                      <div className="prodStrip">
                        <FaPlusCircle
                          style={{ fontSize: "28px" }}
                          onClick={() => handleCount("plus")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prodButtonsBottom">
                  <div className="prodButtonItem">
                    <Button
                      btnClr="transparent"
                      cls="prodButtonChat"
                      ftClr="black"
                      val="Chat"
                    />
                  </div>
                  <div className="prodButtonItem">
                    <Button
                      btnClr="transparent"
                      cls="prodButtonAddBag"
                      ftClr="black"
                      val="Add bag"
                    />
                  </div>
                  <div className="prodButtonItem">
                    <Button
                      btnClr="#273AC7"
                      cls="prodButtonBuyNow"
                      ftClr="white"
                      val="Buy Now"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
