import React from "react";
import { useNavigate } from "react-router-dom";

import characters from "../../assets/img/crowd.png";
import locations from "../../assets/img/loc.png";
import episodes from "../../assets/img/episode.png";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  function handleClickCharacters() {
    navigate("/characters");
  }

  function handleClickEpisodes() {
    navigate("/episodes");
  }

  function handleClickLocations() {
    navigate("/locations");
  }
  return (
    <div className="mainWrapper">
      <div className="cardCOntainer">
        <div className="characters mainCards" onClick={handleClickCharacters}>
          <div className="innerContainer">
            <img className="cardImg" src={characters}></img>
            <h2>Персонажи</h2>
            <p className="innerCardText">
              Зайди и познакомься со всеми персонажами вселенной
            </p>
          </div>
        </div>
        <div className="locations mainCards" onClick={handleClickLocations}>
          <div className="innerContainer">
            <img className="cardImg" src={locations}></img>
            <h2>Локации</h2>
            <p className="innerCardText">
              Исследуй все локации. Давай же, не будь занудой!
            </p>
          </div>
        </div>
        <div className="episodes mainCards" onClick={handleClickEpisodes}>
          <div className="innerContainer">
            <img className="cardImg" src={episodes}></img>
            <h2>Эпизоды</h2>
            <p className="innerCardText">
              Узнай чуть больше о карте приключений Рика и Морти
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
