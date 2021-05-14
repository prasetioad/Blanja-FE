import React, { useState, useEffect } from 'react'
import { userprofile } from '../../components/images'
import {Link} from 'react-router-dom'
import axiosApiInstance from '../../helpers/axios';

import Swal from 'sweetalert2';
import { Navbar } from '../../components/organisms'
import style from './chat.module.css'

function ChatPage() {
  const urlApi = process.env.REACT_APP_API_URL;
  const urlImg = process.env.REACT_APP_API_IMG;

  const [friends, setFriends] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    axiosApiInstance.get(`${urlApi}/users/find-all?page=1&perPage=10&keyword=${keyword}`)
      .then((res) => {
        const newFriends = res.data.data;
        setFriends(newFriends)
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'can not find another user!',
        })
      });
  }, [])

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className={style["box-side-chat"]}>
              <p className={style["chat-title"]}>Chat</p>
              <div className={style["line-width"]}></div>

              <div className={style["row"]}>
                {friends.map((friend) => {
                  return (
                    <Link onClick={e => (!friend.id || !friend.name) ? e.preventDefault() : null} to={`/chat-room?id=${friend.id}`} key={friend.id} style={{ textDecoration: 'none', display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="col-3">
                        <img className={style["userimg"]} src={`${urlImg}${friend.image}`} alt="" />
                      </div>
                      <div className="col">
                        <p className={style["user-name"]}>{friend.name}</p>
                        <p className={style["message-body"]}>. . . </p>
                      </div>
                    </Link>
                  )
                })}

              </div>
            </div>
          </div>
          <div className="col">
            <div className={style["box-main-chat"]}>
              <img src={userprofile} alt="" className={style["main-userimg"]} />
              <p className={style["main-username"]}>Jonas adam</p>
              <div className={style["line-width"]}></div>
              <input className={style["input-massage-body"]} type="text" placeholder="type message..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
