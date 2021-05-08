import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal";
import { Button } from "../../../atoms";

export default function HeadAddress({ address }) {
  const [newAddress, setNewAddress] = useState({
    addressName: null,
    recipient: null,
    address: null,
    city: null,
    phone: null,
    postalCode: null,
    checkbox: false,
  });
  const customStyles = {
    content: {
      top: "53%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      innerWidth: "100%",
    },
  };
  Modal.setAppElement("body");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addAddress, setaddAddress] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const closeAddAddress = () => {
    setaddAddress(false);
    setIsOpen(false);
  };
  const onChangeInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  return (
    <div className="box-head-add" id="main">
      <h4>{address.name}</h4>
      <p>{address.address}</p>
      <button
        onClick={() => {
          openModal();
        }}
      >
        Choose Another Address
      </button>
      <Modal
        isOpen={modalIsOpen}
        //   onAfterOpen=''
        onRequestClose={closeModal}
        className="ModalAddress"
        contentLabel="Example Modal"
      >
        <div className="reactModalPlakat">
          <div className="reactModalBody">
            {addAddress === false && (
              <>
                <div className="reactModalTitle">
                  <span>Choose another address</span>
                </div>
                <div className="reactModalAddNewAdd">
                  <span
                    onClick={() => {
                      setaddAddress(true);
                    }}
                  >
                    Add new address
                  </span>
                </div>
                <div className="reactModalAddressBlock">
                  <div className="reactModalAddressBody">
                    <div className="reactmodalAddressBodyTitle">
                      <p>Andreas Jane</p>
                    </div>
                    <div className="reactModalAddressContent">
                      <p>
                        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                        Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note:
                        blok c 16] Sokaraja, Kab. Banyumas, 53181
                      </p>
                    </div>
                    <div className="reacModalChangeAddressButton">
                      <span style={{ color: "#273AC7" }}>Change address</span>
                    </div>
                  </div>
                </div>
              </>
            )}
            {addAddress === true && (
              <>
                <Modal
                  isOpen={addAddress}
                  // onAfterOpen=''
                  onRequestClose={closeAddAddress}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className="reactModalTitle">
                    <span>Add new address</span>
                  </div>
                  <div className="reactModalAddAddressForm">
                    <form action="">
                      <div className="reactModalAddressTop">
                        <div className="inputTopAddAddress">
                          <p>
                            Save address as (ex : home address, office address)
                          </p>
                          <input
                            type="text"
                            placeholder="Rumah"
                            name="addressName"
                            onChange={(e) => {
                              onChangeInput(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="reactModalAddAddressFlex">
                        <div className="reactModalAddAddressFlexLeft">
                          <div className="addAddressFlexLeftItem">
                            <p>Recipient’s name</p>
                            <input
                              type="text"
                              name="recipient"
                              onChange={(e) => {
                                onChangeInput(e);
                              }}
                            />
                          </div>
                          <div className="addAddressFlexLeftItem">
                            <p>Address</p>
                            <input
                              type="text"
                              name="address"
                              onChange={(e) => {
                                onChangeInput(e);
                              }}
                            />
                          </div>
                          <div className="addAddressFlexLeftItem">
                            <p>City or Subdistrict</p>
                            <input
                              type="text"
                              name="city"
                              onChange={(e) => {
                                onChangeInput(e);
                              }}
                            />
                          </div>
                          <div className="addAddressFlexLeftItem checkboxAddAddress">
                            <div>
                              <input
                                type="checkbox"
                                className=""
                                name="checkbox"
                                onChange={(e) => {
                                  onChangeInput(e);
                                }}
                              />
                            </div>
                            <div>
                              <p>Make it the primary address</p>
                            </div>
                          </div>
                        </div>
                        <div className="reactModalAddAddressFlexLeft">
                          <div className="">
                            <div className="addAddressFlexLeftItem">
                              <p>Recipient's telephone number</p>
                              <input
                                type="text"
                                name="phone"
                                onChange={(e) => {
                                  onChangeInput(e);
                                }}
                              />
                            </div>
                            <div className="addAddressFlexLeftItem">
                              <p>Postal code</p>
                              <input
                                type="text"
                                name="postalCode"
                                onChange={(e) => {
                                  onChangeInput(e);
                                }}
                              />
                            </div>
                          </div>
                          <div className="reactModalAddAddressButtons">
                            <div className="reactModalAddButtonItem">
                              <Button
                                btnClr="white"
                                cls="addAddressButtonsItm"
                                ftClr="#9B9B9B"
                                func={() => closeAddAddress()}
                                val="Cancel"
                                style={{ border: "1px solid #9B9B9B" }}
                              />
                            </div>
                            <div className="reactModalAddButtonItem">
                              <Button
                                btnClr={"#273AC7"}
                                cls="addAddressButtonsItm"
                                ftClr="white"
                                func=""
                                val="Save"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
