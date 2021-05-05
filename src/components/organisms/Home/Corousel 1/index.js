import React from "react";
import "./style.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Item from "./Item";

function Index() {
  const [state, setState] = useState({
    items: [
      { id: 1, url: "./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" },
      { id: 2, url: "./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" },
      { id: 3, url: "./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" },
      { id: 4, url: "./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" },
      { id: 5, url: "./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" },
    ],
  });
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  const handleBack = () => {
    const target = document.getElementsByClassName("homeCorousel1BodyItem");
    let i;
    for (i = 0; i < target.length; i++) {}
  };
  return (
    <div className="homeCorouselOne">
      <Carousel breakPoints={breakPoints}>
        <div>
          <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="" />
        </div>
        <div>
          <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="" />
        </div>
        <div>
          <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="" />
        </div>
        <div>
          <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt="" />
        </div>
        <div>
          <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Index;
