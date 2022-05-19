import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Locations.css";
import backArrow from "../../../../assets/img/Vector.png";

function Locations() {
  const [locs, setLocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!locs.length) {
      axios.get(`https://rickandmortyapi.com/api/location`).then((result) => {
        setLocs(result.data.results);
      });
    }
  });

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="charactersWrapper">
      <div className="headerCharactersContainer">
        <nav className="backContainer">
          <button className="backArrow" onClick={handleClick}>
            <img
              src={backArrow}
              width="15px"
              height="24px"
              alt="backArrow"
            ></img>
            <span className="back">Назад</span>
          </button>
        </nav>
        <h2 className="pageTitle">Локации</h2>
      </div>
      <nav className="navContainer">
        <div className="search name">
          <label htmlFor="nameSearch" className="searchTitle">
            Поиск по названию
          </label>
          <form /*onSubmit={handleSubmit}*/>
            <input
              className="nameSearch"
              id="nameSearch"
              type="text"
              placeholder="Введите название локации"
              //value={valueTxt}
              //onChange={handleValueChange}
            ></input>
          </form>
        </div>
        <div className="search race">
          <label htmlFor="raceSearch" className="searchTitle">
            Поиск по типу
          </label>
          <input
            className="raceSearch"
            id="raceSearch"
            type="text"
            placeholder="Введите тип локации"
          ></input>
        </div>
        <div className="search status">
          <label htmlFor="raceSearch" className="searchTitle">
            Поиск по измерению
          </label>
          <input
            className="raceSearch"
            id="raceSearch"
            type="text"
            placeholder="Введите измерение"
          ></input>
        </div>
      </nav>
      <div className="charactersContainer">
        <ul className="charContainerLoc">
          {locs.map((item, i) => {
            return (
              <li key={i} className="charItemLoc">
                <button className="checkGreen">111</button>
                <div className="locContainer">
                  <span className="locNameContainer">
                    <span className="locName">{item.name}</span>
                  </span>
                  <div className="locContentContainer">
                    <div className="typeDimensionContainer">
                      <span className="typeCont">
                        <span className="itemTxt typeItem">Тип:</span>
                        <span className="itemType">{item.type}</span>
                      </span>
                      <span className="typeCont typeContDimension">
                        <span className="itemTxt dimensionItem">
                          Измерение:
                        </span>
                        <span className="dimensionType">{item.dimension}</span>
                      </span>
                    </div>
                    <span className="typeCont typeContNum">
                      <span className="itemTxt numberTxt">
                        Количество персонажей, которые в последний раз были
                        замечены здесь:
                      </span>
                      <span className="itemNumber">
                        {item.residents.length}
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Locations;
