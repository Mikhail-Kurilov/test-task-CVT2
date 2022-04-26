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
    <main className="mainWrapper">
      <div className="cardCOntainer">
        <section
          className="characters mainCards"
          onClick={handleClickCharacters}
        >
          <div className="innerContainer">
            <img className="cardImg" src={characters}></img>
            <h2>Персонажи</h2>
            <h3 className="innerCardText">
              Зайди и познакомься со всеми персонажами вселенной
            </h3>
          </div>
        </section>
        <section className="locations mainCards" onClick={handleClickLocations}>
          <div className="innerContainer">
            <img className="cardImg" src={locations}></img>
            <h2>Локации</h2>
            <h3 className="innerCardText">
              Исследуй все локации. Давай же, не будь занудой!
            </h3>
          </div>
        </section>
        <section className="episodes mainCards" onClick={handleClickEpisodes}>
          <div className="innerContainer">
            <img className="cardImg" src={episodes}></img>
            <h2>Эпизоды</h2>
            <h3 className="innerCardText">
              Узнай чуть больше о карте приключений Рика и Морти
            </h3>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
