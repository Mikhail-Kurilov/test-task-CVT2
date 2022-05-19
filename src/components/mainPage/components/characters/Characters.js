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
  const [filteredResults, setFilteredResults] = useState([]);
  const [stripe, setGrid] = useState("Stripes");
  const [valueTxt, setValueTxt] = useState("");
  const navigate = useNavigate();

  function handleValueChange(e) {
    searchItems(e.target.value);
  }

  function searchItems(searchValue) {
    setValueTxt(searchValue);
    console.log(searchValue);
    if (valueTxt !== "") {
      const filteredData = cards.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(valueTxt.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(cards);
    }
  }

  //const charRace = document.getElementById("raceSearch").value;

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
        {valueTxt.length > 1
          ? filteredResults.map((item, i) => {
              return (
                <li key={i} className="charItem">
                  <img src={item.image} width="162px" height="162px"></img>
                  <div className="charItemHandlerOne">
                    <section className="firstItemContainer">
                      <span className="innerItem">
                        <span className="charName">{item.name}</span>
                      </span>
                      <span className="innerItem raceBox">
                        <span className="itemTxt raceItem">Раса:</span>
                        <span className="itemValue">{item.species}</span>
                      </span>
                      <span className="innerItem placeBox">
                        <span className="itemTxt placeItem">
                          Место происхождения:
                        </span>
                        <span className="itemValue">{item.origin.name}</span>
                      </span>
                      <span className="innerItem locBox">
                        <span className="itemTxt locItem">
                          Последняя локация:
                        </span>
                        <span className="itemValue">{item.location.name}</span>
                      </span>
                    </section>
                    <div className="charItemHandlerTwo">
                      <section className="secondItemContainer">
                        <span className="innerItem">
                          <span className="itemTxt genderItem">Пол:</span>
                          <span className="itemValue">{item.gender}</span>
                        </span>
                        <span className="innerItem">
                          <span className="itemTxt sceneItem">Эпизоды:</span>
                          <span className="itemValue">
                            {getEpisodeNumbers(item.episode)}
                          </span>
                        </span>
                      </section>
                      <section className="thirdItemContainer">
                        {item.status === "Alive" ? (
                          <span className="itemStatus">
                            <img src={greenDot}></img>
                            <span className="itemStatusTxt">Живой</span>
                          </span>
                        ) : item.status === "Dead" ? (
                          <span className="itemStatus">
                            <img src={redDot}></img>
                            <span className="itemStatusTxt">Мертв</span>
                          </span>
                        ) : (
                          <span className="itemStatus">
                            <img src={yellowDot}></img>
                            <span className="itemStatusTxt">Неизвестно</span>
                          </span>
                        )}
                        <button className="addToChosenStr">
                          Добавить в избранное
                        </button>
                      </section>
                    </div>
                  </div>
                </li>
              );
            })
          : cards.map((item, i) => {
              return (
                <li key={i} className="charItem">
                  <img src={item.image} width="162px" height="162px"></img>
                  <div className="charItemHandlerOne">
                    <section className="firstItemContainer">
                      <span className="innerItem">
                        <span className="charName">{item.name}</span>
                      </span>
                      <span className="innerItem raceBox">
                        <span className="itemTxt raceItem">Раса:</span>
                        <span className="itemValue">{item.species}</span>
                      </span>
                      <span className="innerItem placeBox">
                        <span className="itemTxt placeItem">
                          Место происхождения:
                        </span>
                        <span className="itemValue">{item.origin.name}</span>
                      </span>
                      <span className="innerItem locBox">
                        <span className="itemTxt locItem">
                          Последняя локация:
                        </span>
                        <span className="itemValue">{item.location.name}</span>
                      </span>
                    </section>
                    <div className="charItemHandlerTwo">
                      <section className="secondItemContainer">
                        <span className="innerItem">
                          <span className="itemTxt genderItem">Пол:</span>
                          <span className="itemValue">{item.gender}</span>
                        </span>
                        <span className="innerItem">
                          <span className="itemTxt sceneItem">Эпизоды:</span>
                          <span className="itemValue">
                            {getEpisodeNumbers(item.episode)}
                          </span>
                        </span>
                      </section>
                      <section className="thirdItemContainer">
                        {item.status === "Alive" ? (
                          <span className="itemStatus">
                            <img src={greenDot}></img>
                            <span className="itemStatusTxt">Живой</span>
                          </span>
                        ) : item.status === "Dead" ? (
                          <span className="itemStatus">
                            <img src={redDot}></img>
                            <span className="itemStatusTxt">Мертв</span>
                          </span>
                        ) : (
                          <span className="itemStatus">
                            <img src={yellowDot}></img>
                            <span className="itemStatusTxt">Неизвестно</span>
                          </span>
                        )}
                        <button className="addToChosenStr">
                          Добавить в избранное
                        </button>
                      </section>
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
              <div className="firstItemContainerGrid">
                <section className="innerItem nameStatus">
                  <span className="charName">{item.name}</span>
                  <span className="thirdItemContainerGrid">
                    {item.status === "Alive" ? (
                      <span className="itemStatusGrid">
                        <img src={greenDot}></img>
                        <span className="itemStatusTxt">Живой</span>
                      </span>
                    ) : item.status === "Dead" ? (
                      <span className="itemStatusGrid">
                        <img src={redDot}></img>
                        <span className="itemStatusTxt">Мертв</span>
                      </span>
                    ) : (
                      <span className="itemStatusGrid">
                        <img src={yellowDot}></img>
                        <span className="itemStatusTxt">Неизвестно</span>
                      </span>
                    )}
                  </span>
                </section>
                <section className="innerItem raceBox">
                  <span className="itemTxt raceItem">Раса:</span>
                  <span className="itemValue">{item.species}</span>
                </section>
                <section className="innerItem placeBox">
                  <span className="itemTxt placeItem">
                    Место происхождения:
                  </span>
                  <span className="itemValue">{item.origin.name}</span>
                </section>
                <section className="innerItem locBox">
                  <span className="itemTxt locItem">Последняя локация:</span>
                  <span className="itemValue">{item.location.name}</span>
                </section>
              </div>
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
        <h2 className="pageTitle">
          <span className="charTitle">Персонажи</span>
        </h2>
      </div>
      <nav className="navContainer">
        <div className="searchSectionWrapper">
          <section className="search name">
            <label htmlFor="nameSearch" className="searchTitle">
              Поиск по имени
            </label>
            <div>
              <input
                className="nameSearch"
                id="nameSearch"
                type="text"
                placeholder="Введите имя персонажа"
                onChange={handleValueChange}
              ></input>
            </div>
          </section>
          <section className="search race">
            <label htmlFor="raceSearch" className="searchTitle">
              Поиск по расе
            </label>
            <input
              className="raceSearch"
              id="raceSearch"
              type="text"
              placeholder="Введите расу персонажа"
            ></input>
          </section>
          <section className="search status">
            <label htmlFor="statusSearch" className="searchTitle">
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
          </section>
        </div>
        <div className="formContainer">
          <span className="formTitle searchTitle">Вид:</span>
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
      </nav>
      <div className="charactersContainer">
        {stripe === "Stripes"
          ? handleClickViewStripes()
          : handleClickViewGrid()}
      </div>
    </div>
  );
}

export default Characters;
