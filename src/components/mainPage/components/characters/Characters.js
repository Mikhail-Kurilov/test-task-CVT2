import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Characters.css";
import backArrow from "../../../../assets/img/Vector.png";
import greenDot from "../../../../assets/img/greenDot.png";
import redDot from "../../../../assets/img/redDot.png";
import yellowDot from "../../../../assets/img/yellowDot.png";

function Characters() {
  const [cards, setCards] = useState([]);
  const [stripe, setGrid] = useState("Stripes");
  const navigate = useNavigate();

  function handleClickView() {
    document.querySelector(".toggleView").classList.toggle("active");
    document.querySelector(".toggleView2").classList.toggle("active2");
    setGrid(stripe === "Stripes" ? "noStripes" : "Stripes");
  }

  useEffect(() => {
    if (!cards.length) {
      axios.get(`https://rickandmortyapi.com/api/character`).then((result) => {
        setCards(result.data.results);
      });
    }
  });

  function getEpisodeNumbers(episodes) {
    return episodes
      .map((str) => {
        const arr = str.split("/");
        return arr[arr.length - 1] - 0;
      })
      .sort((a, b) => a - b)
      .reduce(
        (result, value) => {
          const lastElem = result[result.length - 1];
          if (!lastElem.length) {
            lastElem[0] = value;
          } else if (lastElem.find((el) => el === value - 1)) {
            lastElem[1] = value;
          } else {
            result.push([value]);
          }
          return result;
        },
        [[]]
      )
      .map((el) => el.join(" - "))
      .join(", ");
  }

  function handleClickViewStripes() {
    return (
      <ul className="charContainer">
        {cards.map((item, i) => {
          return (
            <li key={i} className="charItem">
              <img src={item.image} width="162px" height="162px"></img>
              <div className="charItemHandlerOne">
                <span className="firstItemContainer">
                  <span className="innerItem">
                    <p className="charName">{item.name}</p>
                  </span>
                  <span className="innerItem raceBox">
                    <p className="itemTxt raceItem">Раса:</p>
                    <p className="itemValue">{item.species}</p>
                  </span>
                  <span className="innerItem placeBox">
                    <p className="itemTxt placeItem">Место происхождения:</p>
                    <p className="itemValue">{item.origin.name}</p>
                  </span>
                  <span className="innerItem locBox">
                    <p className="itemTxt locItem">Последняя локация:</p>
                    <p className="itemValue">{item.location.name}</p>
                  </span>
                </span>
                <div className="charItemHandlerTwo">
                  <span className="secondItemContainer">
                    <span className="innerItem">
                      <p className="itemTxt genderItem">Пол:</p>
                      <p className="itemValue">{item.gender}</p>
                    </span>
                    <span className="innerItem">
                      <p className="itemTxt sceneItem">Эпизоды:</p>
                      <p className="itemValue">
                        {getEpisodeNumbers(item.episode)}
                      </p>
                    </span>
                  </span>
                  <span className="thirdItemContainer">
                    {item.status === "Alive" ? (
                      <span className="itemStatus">
                        <img src={greenDot}></img>
                        <p className="itemStatusTxt">Живой</p>
                      </span>
                    ) : item.status === "Dead" ? (
                      <span className="itemStatus">
                        <img src={redDot}></img>
                        <p className="itemStatusTxt">Мертв</p>
                      </span>
                    ) : (
                      <span className="itemStatus">
                        <img src={yellowDot}></img>
                        <p className="itemStatusTxt">Неизвестно</p>
                      </span>
                    )}
                    <button className="addToChosenStr">
                      Добавить в избранное
                    </button>
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  function handleClickViewGrid() {
    return (
      <ul className="charContainerGrid">
        {cards.map((item, i) => (
          <li key={i} className="charItemGrid">
            <button className="addToChosenGrid"></button>
            <img src={item.image} width="162px" height="162px"></img>
            <div className="charItemHandlerOneGrid">
              <span className="firstItemContainer">
                <span className="innerItem">
                  <p className="charName">{item.name}</p>
                  <span className="thirdItemContainer">
                    {item.status === "Alive" ? (
                      <span className="itemStatusGrid">
                        <img src={greenDot}></img>
                        <p className="itemStatusTxt">Живой</p>
                      </span>
                    ) : item.status === "Dead" ? (
                      <span className="itemStatusGrid">
                        <img src={redDot}></img>
                        <p className="itemStatusTxt">Мертв</p>
                      </span>
                    ) : (
                      <span className="itemStatusGrid">
                        <img src={yellowDot}></img>
                        <p className="itemStatusTxt">Неизвестно</p>
                      </span>
                    )}
                  </span>
                </span>
                <span className="innerItem raceBox">
                  <p className="itemTxt raceItem">Раса:</p>
                  <p className="itemValue">{item.species}</p>
                </span>
                <span className="innerItem placeBox">
                  <p className="itemTxt placeItem">Место происхождения:</p>
                  <p className="itemValue">{item.origin.name}</p>
                </span>
                <span className="innerItem locBox">
                  <p className="itemTxt locItem">Последняя локация:</p>
                  <p className="itemValue">{item.location.name}</p>
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="charactersWrapper">
      <div className="headerCharactersContainer">
        <div className="backContainer">
          <button className="backArrow" onClick={handleClick}>
            <img
              src={backArrow}
              width="15px"
              height="24px"
              alt="backArrow"
            ></img>
          </button>
          <p className="back">Назад</p>
        </div>
        <h3 className="pageTitle">Персонажи</h3>
      </div>
      <div className="navContainer">
        <div className="search name">
          <label for="nameSearch" className="searchTitle">
            Поиск по имени
          </label>
          <input
            className="nameSearch"
            id="nameSearch"
            type="text"
            placeholder="Введите имя персонажа"
          ></input>
        </div>
        <div className="search race">
          <label for="raceSearch" className="searchTitle">
            Поиск по расе
          </label>
          <input
            className="raceSearch"
            id="raceSearch"
            type="text"
            placeholder="Введите расу персонажа"
          ></input>
        </div>
        <div className="search status">
          <label for="statusSearch" className="searchTitle">
            Поиск по статусу
          </label>
          <select className="statusSearch" id="statusSearch">
            <option className="statusSearchOption" value="">
              Выберете статус персонажа
            </option>
            <option className="statusSearchOption" value="Живой">
              Живой
            </option>
            <option className="statusSearchOption" value="Мертв">
              Мертв
            </option>
            <option className="statusSearchOption" value="Неизвестно">
              Неизвестно
            </option>
          </select>
        </div>
        <div className="formContainer">
          <p className="formTitle searchTitle">Вид:</p>
          <div className="toggleButtonContainer">
            <button
              className="toggleView2 active2"
              onClick={handleClickView}
            ></button>
            <button
              className="toggleView active"
              onClick={handleClickView}
            ></button>
          </div>
        </div>
      </div>
      <div className="charactersContainer">
        {stripe === "Stripes"
          ? handleClickViewStripes()
          : handleClickViewGrid()}
      </div>
    </div>
  );
}

export default Characters;
