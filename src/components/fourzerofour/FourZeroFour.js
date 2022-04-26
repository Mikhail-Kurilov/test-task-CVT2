import React from "react";
import { useNavigate } from "react-router-dom";
import "./FourZeroFour.css";

import img from "../../assets/img/randm.png";
import img404 from "../../assets/img/404.png";
import home from "../../assets/img/home.png";

function FourZeroFour() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="fourWrapper">
      <div className="imageWrapper">
        <img src={img} alt="RickAndMorty"></img>
      </div>
      <div className="imageWrapperDown">
        <img src={img404} alt="404"></img>
      </div>
      <span className="upperText404">
        Упс. Кажется вы заблудились. Только без паники!
      </span>
      <span className="downText404">
        Страница, которую вы ищите не существует, либо была удалена
      </span>
      <button className="homeButton" onClick={handleClick}>
        <img className="homeImg" alt="" src={home}></img>
        Домой
      </button>
    </div>
  );
}

export default FourZeroFour;
