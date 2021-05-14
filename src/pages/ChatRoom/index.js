import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import axiosApiInstance from '../../helpers/axios';
import qs from 'query-string'
import io from 'socket.io-client'

import Swal from 'sweetalert2';
import { Navbar } from '../../components/organisms'
import style from '../Chat/chat.module.css'

function ChatRoomPage({ location }) {
    const urlSocket = process.env.REACT_APP_API_SOCKET;
    const urlApi = process.env.REACT_APP_API_URL;
    const urlImg = process.env.REACT_APP_API_IMG;

    const [user, setUser] = useState([])
    const [friends, setFriends] = useState([])
    const [keyword, setKeyword] = useState("")
    const [userSelected, setUserSelected] = useState([]);
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("")
    const [comingMessage, setComingMessage] = useState([])


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

    useEffect(() => {
        axiosApiInstance.get(`${urlApi}/users/find-one`)
            .then((res) => {
                const data = res.data.data[0]
                setUser(data)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'can not find user!',
                })
            })


        const { id } = qs.parse(location.search)

        axios.get(`${urlApi}/users/find-byid/${id}`)
            .then((res) => {
                setUserSelected(res.data.data[0])
            })
            .catch((err) => {
                alert('cant get user selected')
            })

        const connectSocket = io(urlSocket);
        setSocket(connectSocket);

    }, [location])

    useEffect(() => {
        if (socket) {
            socket.emit("initialUserLogin", parseInt(localStorage.getItem("id")));
        }
    }, [socket]);

    useEffect(() => {
        if (socket) {
            socket.on("receiveMessage", (data) => {
                setComingMessage([...comingMessage, data])
            })
        }

    }, [socket, comingMessage])

    const handleClick = (e) => {
        e.preventDefault();
        socket.emit('sendMessage', {
            idReceiver: userSelected.id,
            idSender: parseInt(localStorage.getItem('id')),
            idSocketSender: socket.id,
            message: message
        }, (data) => {
            setComingMessage([...comingMessage, data])
        })
        setMessage("")

    };

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
                            <img src={`${urlImg}${userSelected.image}`} alt="" className={style["main-userimg"]} />
                            <p className={style["main-username"]}>{userSelected.name}</p>
                            <div className={style["line-width"]}></div>

                            <div className={style["main-chat"]}>
                                <ul>
                                    {comingMessage.map((item, index) => {
                                        return item.idReceiver === userSelected.id ?
                                            <div className={style["cont-msg-rec"]} key={index}>
                                                <li className={style["msg-rec"]} > {item.message} <span className={style.spanlist}><p>{item.time}</p></span>  </li>
                                                <img src={`${urlImg}${user.image}`} alt="img profile"></img>
                                            </div>
                                            :
                                            item.idReceiver === parseInt(localStorage.getItem('id')) && userSelected.id === item.idSender ?
                                                <div className={style["cont-msg-send"]} key={index}>
                                                    <img src={`${urlImg}${userSelected.image}`} alt="img profile"></img>
                                                    <li className={style["msg-send"]} > {item.message} <span className={style.spanlist}><p>{item.time}</p></span>  </li>
                                                </div>
                                                :
                                                ""
                                    })}
                                </ul>
                            </div>

                            <input className={style["input-massage-body"]} value={message} type="text" placeholder="type message..." onChange={(e) => setMessage(e.target.value)} />
                            <button onClick={handleClick}>enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatRoomPage
