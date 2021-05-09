import css from "./profileUser.module.css";
import { useState } from "react";
// IMAGES
import Left from "../../../images/left.png";
import Right from "../../../images/right.png";
import NoOrder from "../../../images/NoOrder.png";
// ATOMS
import { Button } from "../../../atoms";
import { useEffect } from "react";
import axiosApiInstance from "../../../../helpers/axios";
import Rupiah from "../../../../helpers/rupiah";

export default function MyOrderUser({ smoum }) {
  const btnCls = "hoverThis " + css.myOrderBtn;
  const orderButtonRowCarouselMobile = [
    "All items",
    "Not yet paid",
    "Packed",
    "Sent",
    "Completed",
    "Order cancel",
  ];
  const [mous, setMous] = useState("All items");
  const [buttonOrder, switchButtonOrder] = useState(0);
  const [myOrder, setMyOrder] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [status, setStatus] = useState("");
  // SWITCH CAROUSEL BUTTON
  const switchBtn = (opr) => {
    if (opr === "+") {
      if (buttonOrder < orderButtonRowCarouselMobile.length - 1) {
        switchButtonOrder(buttonOrder + 1);
        setStatus(orderButtonRowCarouselMobile[buttonOrder + 1]);
        smoum(orderButtonRowCarouselMobile[buttonOrder + 1]);
      }
    } else if (opr === "-") {
      if (buttonOrder > 0) {
        switchButtonOrder(buttonOrder - 1);
        if (status === "Not yet paid") {
          setStatus("");
        } else {
          setStatus(orderButtonRowCarouselMobile[buttonOrder - 1]);
        }
        smoum(orderButtonRowCarouselMobile[buttonOrder - 1]);
      }
    }
  };

  const handleClickStatus = (params) => {
    if (params === "") {
      setMous("All items");
    } else {
      setMous(params);
    }
    setStatus(params);
  };
  // USEEFFECT
  useEffect(() => {
    axiosApiInstance
      .get(`${process.env.REACT_APP_API_URL}/order?perPage=10&status=${status}`)
      .then((res) => {
        setEmpty(false);
        setMyOrder(res.data.data);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [status]);

  return (
    <div className={"displayColumn " + css.rightSideUserProfile}>
      <div className={"displayColumn " + css.rightSideUserTitle}>
        <span
          className={css.rightSideUserTitleBigText + " " + css.hideInMobile}
        >
          My order
        </span>
        <div className={"displayRow " + css.myOrderBtnRowDesktop}>
          <Button
            cls={
              mous === "All items"
                ? btnCls + " " + css.selectedMyOrderBtn
                : btnCls
            }
            func={() => handleClickStatus("")}
            val="All items"
          />
          <Button
            cls={
              mous === "Not yet paid"
                ? btnCls + " " + css.selectedMyOrderBtn
                : btnCls
            }
            func={() => handleClickStatus("Not yet paid")}
            val="Not yet paid"
          />
          <Button
            cls={
              mous === "Packed" ? btnCls + " " + css.selectedMyOrderBtn : btnCls
            }
            func={() => handleClickStatus("Packed")}
            val="Packed"
          />
          <Button
            cls={
              mous === "Sent" ? btnCls + " " + css.selectedMyOrderBtn : btnCls
            }
            func={() => handleClickStatus("Sent")}
            val="Sent"
          />
          <Button
            cls={
              mous === "Completed"
                ? btnCls + " " + css.selectedMyOrderBtn
                : btnCls
            }
            func={() => handleClickStatus("Completed")}
            val="Completed"
          />
          <Button
            cls={
              mous === "Order cancel"
                ? btnCls + " " + css.selectedMyOrderBtn
                : btnCls
            }
            func={() => handleClickStatus("Order cancel")}
            val="Order cancel"
          />
        </div>
        <div className={"displayRow " + css.myOrderBtnRowMobile}>
          <img
            alt="Arrow Left"
            className={css.arrowCarousel}
            onClick={() => {
              switchBtn("-");
            }}
            src={Left}
            style={buttonOrder < 1 ? { opacity: "0.25" } : null}
          />
          <Button
            cls={btnCls + " " + css.selectedMyOrderBtn}
            val={orderButtonRowCarouselMobile[buttonOrder]}
          />
          <img
            alt="Arrow Right"
            className={css.arrowCarousel}
            onClick={() => {
              switchBtn("+");
            }}
            src={Right}
            style={
              buttonOrder >= orderButtonRowCarouselMobile.length - 1
                ? { opacity: "0.25" }
                : null
            }
          />
        </div>
      </div>
      <div className={"displayColumn " + css.rightSideMyOrderDataShow}>
        {empty === false && (
          <table className="table table-responsive-sm text-center">
            <thead>
              <tr>
                <th>Store</th>
                <th>Address</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myOrder.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td>
                    <img src="https://ui-avatars.com/api/?name={{ $detail->username }}" height="60"
                      className="rounded-circle"/>
                  </td> */}
                    <td className="align-middle">{item.store}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{Rupiah(item.total)}</td>
                    <td className="align-middle">{item.paymentMethod}</td>
                    <td className="align-middle">{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {empty === true && (
          <img alt="No Order" className={css.noOrderImg} src={NoOrder} />
        )}
      </div>
    </div>
  );
}
