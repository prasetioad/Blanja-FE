import React, { useState } from 'react'
import './ProductCarousel.css'
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'
import Button from '../../../atoms/Button'

function Index() {
    const [count, setcount] = useState(0)
    const [size, setsize] = useState(28)
    const [mainImg, setMainImg] = useState("./asset/1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png")

    const handleSize =(data)=>{
        if(data === 'plus'){
            setsize(size+1)
        }else{
            if(size > 0){
                setsize(size-1)
            }
        }
    }
    const handleCount =(data)=>{
        if(data === 'plus'){
            setcount(count+1)
        }else{
            if(count > 0){
                setcount(count-1)
            }
        }
    }
   
    return (
        <div>
            <div className="productTopContent">
                <div className="productTopContentCarouselWrap">
                <div className="productTopCategoryRoute">
                    <p>Home  category  T-Shirt</p>
                </div>
                    <div className="productTopContentBody">
                        <div className="productTopContetBodyLeft">
                            <div className="productTopMainImage">
                                <img src={mainImg} alt="image"/>
                            </div>
                            <div className="productTopContentTriggerImage">
                                <div className="hoverThis productTriggerImageItem">
                                    <img src="./asset/1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png" alt="" onClick={()=> setMainImg("./asset/1de17b40-c750-40ed-a618-ca2c5ee79da0 1.png")}/>
                                </div>
                                <div className="hoverThis productTriggerImageItem">
                                    <img src="./asset/4bcf6332-eea3-4278-8c75-9be1f59cbfa3 2.png" alt="" onClick={()=> setMainImg("./asset/4bcf6332-eea3-4278-8c75-9be1f59cbfa3 2.png")}/>
                                </div>
                                <div className="hoverThis productTriggerImageItem">
                                    <img src="./asset/5f9d591f-54e0-4f48-99c8-33e5ab47c871 2.png" alt="" onClick={()=> setMainImg("./asset/5f9d591f-54e0-4f48-99c8-33e5ab47c871 2.png")}/>
                                </div>
                                <div className="hoverThis productTriggerImageItem">
                                    <img src="./asset/ef0755f4-97be-42d3-a1e9-e3c892b52706 2.png" alt="" onClick={()=> setMainImg("./asset/ef0755f4-97be-42d3-a1e9-e3c892b52706 2.png")}/>
                                </div>
                                <div className="hoverThis productTriggerImageItem">
                                    <img src="./asset/f2c747c5-1f63-4476-b1b9-d8aa8ace2ac2 2.png" alt="" onClick={()=> setMainImg("./asset/f2c747c5-1f63-4476-b1b9-d8aa8ace2ac2 2.png")}/>
                                </div>
                            </div>
                        </div>
                        <div className="productTopContentRight">
                            <div className="productTopContentRightBody">
                                <div className="productTopBotContent">
                                    <p>Baju muslim pria</p>
                                    <span className='prodTextTiny'>Zalora Cloth</span>
                                </div>
                                <div className="productTopBotContentStar">
                                    <div className="prodStarTop">
                                        <img src=".asset/Start.png" alt=""/>
                                    </div>
                                    <div className="prodStarTop">
                                        <img src=".asset/Start.png" alt=""/>
                                    </div>
                                    <div className="prodStarTop">
                                        <img src=".asset/Start.png" alt=""/>
                                    </div>
                                    <div className="prodStarTop">
                                        <img src=".asset/Start.png" alt=""/>
                                    </div>
                                    <div className="prodStarTop">
                                        <img src=".asset/Start.png" alt=""/>
                                    </div>
                                    <div className="prodStarTop">
                                        <span>(10)</span>
                                    </div>
                                </div>
                                <div className="productTopBotContentPrice">
                                    <span className='prodTextTiny'>Price</span>
                                    <p>$ 20.0</p>
                                </div>
                                <div className="productTopBotContentColor">
                                    <p>Color</p>
                                    <div className="productTopBotContentColorItem">
                                        <div className="ptbccItem">
                                            <img src="./asset/Ellipse 5.png" alt=""/>
                                        </div>
                                        <div className="ptbccItem">
                                            <img src="./asset/Ellipse 6.png" alt=""/>
                                        </div>
                                        <div className="ptbccItem">
                                            <img src="./asset/Ellipse 7.png" alt=""/>
                                        </div>
                                        <div className="ptbccItem">
                                            <img src="./asset/Ellipse 8.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="productSizeAndCount">
                                    <div className="productSizeAndCountItem">
                                        <span>size</span>
                                        <div className="productSizeAndCountObjek">
                                            <div className="prodStrip">
                                                <FaMinusCircle style={{fontSize: '28px'}} onClick={()=>handleSize()}/>
                                            </div>
                                            <div className="prodSizeInput">
                                                <p>{size}</p>
                                            </div>
                                            <div className="prodStrip">
                                                <FaPlusCircle style={{fontSize: '28px'}} onClick={()=>handleSize('plus')}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="productSizeAndCountItem">
                                        <span>Jumlah</span>
                                        <div className="productSizeAndCountObjek">
                                            <div className="prodStrip">
                                                <FaMinusCircle style={{fontSize: '28px'}} onClick={()=> handleCount()}/>
                                            </div>
                                            <div className="prodSizeInput">
                                                <p>{count}</p>
                                            </div>
                                            <div className="prodStrip">
                                                <FaPlusCircle style={{fontSize: '28px'}} onClick={()=> handleCount('plus')}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="prodButtonsBottom">
                                    <div className="prodButtonItem">
                                        <Button btnClr='transparent' cls='prodButtonChat' ftClr='black' val='Chat'/>
                                    </div>
                                    <div className="prodButtonItem">
                                        <Button btnClr='transparent' cls='prodButtonAddBag' ftClr='black' val="Add bag"/>
                                    </div>
                                    <div className="prodButtonItem">
                                        <Button btnClr='#273AC7' cls='prodButtonBuyNow' ftClr='white' val="Buy Now"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
