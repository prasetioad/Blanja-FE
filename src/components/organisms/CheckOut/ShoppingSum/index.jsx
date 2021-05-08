import React, { useState } from 'react'
import './style.css'
import Modal from 'react-modal';
import {FaTimes} from 'react-icons/fa'
import { Button } from '../../../atoms';


export default function ShoppingSum() {
  const [totalOrder, setTotalOrder] = useState()
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const customStyles = {
        content : {
          top                   : '56%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      function openModal() {
        setIsOpen(true);
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal(){
        setIsOpen(false);
      }
      console.log(modalIsOpen);
    return (
        <div className="box-shop-checkout">
            <h3>Shopping Summary</h3>
            <div className="box-shop-line-checkout">
                <p>Order</p>
                <h5>$40.0</h5>
            </div>
            <div className="box-shop-line-checkout">
                <p>Delivery</p>
                <h5>$5.0</h5>
            </div>
            <hr />
            <div className="box-shop-line-checkout">
                <h4>Shopping Summary</h4>
                <h5>$45.0</h5>
            </div>
            <button onClick={()=>{openModal()}}>Select Payment</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
            className='Modal'
            // overlayClassName='Overlay'
            >
              <div className="paymentModalBody">
                  <div className="paymentModalHead">
                    <div>
                      <FaTimes style={{fontSize: '28pxs'}} onClick={()=>{closeModal()}}/>
                    </div>
                    <div className="paymentModalTitle">
                      <p>Payment</p>
                    </div>
                  </div>
                  <div className="paymentModalMethod">
                    <p>Payment method</p>
                    <div className="paymentWrapperMethod">
                      <div className="paymentWrapperMethodItem">
                        <div className="paymentModalItemLeft">
                            <div>
                              <img src="./asset/Logo-GoPay-Vector-CDR-dan-PNG 1.png" alt=""/>
                            </div>
                            <div>
                              <img src="./asset/kisspng-pos-indonesia-mail-point-of-sale-logo-indonesia-5aeb329c2f74d7 1.png" alt=""/>
                            </div>
                            <div>
                              <img src="./asset/Group.png" alt=""/>
                            </div>
                        </div>
                        <div className="paymentModalItemRigth">
                          <div className="paymentModalItemRightContent">
                            <div className="paymentModalName">
                              <p>Gopay</p>
                            </div>
                            <div className="paymentModalChecklist">
                              <input type="checkbox"/>
                            </div>
                          </div>
                          <div className="paymentModalItemRightContent">
                            <div className="paymentModalName">
                              <p>Pos Indonesia</p>
                            </div>
                            <div className="paymentModalChecklist">
                              <input type="checkbox"/>
                            </div>
                          </div>
                          <div className="paymentModalItemRightContent">
                            <div className="paymentModalName">
                              <p>MasterCard</p>
                            </div>
                            <div className="paymentModalChecklist">
                              <input type="checkbox"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="paymentModalBottom">
                        <p>Shopping summary</p>
                        <div className="paymentModalSummary">
                          <div className="paymentModalSummaryDetil">
                            <div>
                              <p>Order</p>
                            </div>
                            <div>
                              <span>$ 40.0</span>
                            </div>
                          </div>
                          <div className="paymentModalSummaryDetil">
                            <div>
                              <p>Delivery</p>
                            </div>
                            <div>
                              <span>$ 5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="paymentModalFooter">
                        <div className="paymentModalFooterBody">
                          <div className="paymentSHoppingSUmmary">
                            <p>Shopping summary</p>
                            <span>$ 45.0</span>
                          </div>
                          <div className="paymentModalButton">
                            <Button btnClr="#273AC7" val='Buy' ftClr="white" cls="paymentModalBtn" func=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </Modal>
        </div>
    )
}
