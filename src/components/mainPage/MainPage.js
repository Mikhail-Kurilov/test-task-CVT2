import React from "react";

import characters from "../../assets/img/crowd.png";
import locations from "../../assets/img/loc.png";
import episodes from "../../assets/img/episode.png";

function MainPage() {
  return (
    <div className="mainWrapper">
      <div className="cardCOntainer">
        <div className="characters mainCards">
          <img src={characters}></img>
          <h2>Персонажи</h2>
          <p>Зайди и познакомься со всеми персонажами вселенной</p>
        </div>
        <div className="locations mainCards">
          <img src={locations}></img>
          <h2>Локации</h2>
          <p>Исследуй все локации. Давай же, не будь занудой!</p>
        </div>
        <div className="episodes mainCards">
          <img src={episodes}></img>
          <h2>Эпизоды</h2>
          <p>Узнай чуть больше о карте приключений Рика и Морти</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
