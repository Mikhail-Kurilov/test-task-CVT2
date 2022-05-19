import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Episodes.css";
import backArrow from "../../../../assets/img/Vector.png";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!episodes.length) {
      getData(`https://rickandmortyapi.com/api/episode`, (episodes) => {
        getData("https://rickandmortyapi.com/api/character", (characters) => {
          episodes.forEach((episode) => {
            episode.characters = episode.characters.map((url) => {
              const arr = url.split("/");
              const id = arr[arr.length - 1] - 0;
              return characters.find((ch) => ch.id === id).name;
            });
          });
          setEpisodes(episodes);
        });
      });
    }
  }, [setEpisodes, getData]);

  function getData(url, cb, results = []) {
    if (url) {
      axios.get(url).then((result) => {
        if (result && result.status === 200) {
          results = results.concat(result.data.results);
        }
        getData(result.data.info.next, cb, results);
      });
    } else {
      cb(results);
    }
  }

  function handleClick() {
    navigate(-1);
  }

  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const onButtonClick = () => {
    inputEl3.current.value = inputEl1.current.value + inputEl2.current.value;
  };

  return (
    <div className="charactersWrapper">
      <input ref={inputEl1} type="text" />
      <input ref={inputEl2} type="text" />
      <input ref={inputEl3}></input>
      <button onClick={onButtonClick}>Установить поле ввода</button>
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
        <h2 className="pageTitle">Эпизоды</h2>
      </div>
      <nav className="navContainerEpisodes">
        <section className="search name">
          <label htmlFor="nameSearch" className="searchTitle">
            Поиск по названию
          </label>
          <form /*onSubmit={handleSubmit}*/>
            <input
              className="nameSearch"
              id="nameSearch"
              type="text"
              placeholder="Введите название серии"
              //value={valueTxt}
              //onChange={handleValueChange}
            ></input>
          </form>
        </section>
        <section className="search raceEpisode">
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
        <section className="search statusEpisode">
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
      </nav>
      <div className="itemWrapper">
        <ul className="itemContainer">
          {episodes.map((item, i) => {
            return (
              <li key={i} className="episodeItem">
                <span className="nameButtonContainer">
                  <span className="itemName">{item.name}</span>
                  <button className="addButton">123</button>
                </span>
                <div className="contentEpisodeContainer">
                  <div className="episodeDateCont">
                    <span className="episodeDate">
                      <span className="itemTxt">Эпизод:</span>
                      <span className="episodeDate">{item.episode}</span>
                    </span>
                    <span className="dataBox">
                      <span className="itemTxt">Дата выхода:</span>
                      <span className="itemData">{item.air_date}</span>
                    </span>
                  </div>
                  <span className="charactersTxt">
                    <span className="itemTxt">
                      Персонажи, учавствующие в эпизоде:
                    </span>
                    <span className="episodeCharacters">
                      {item.characters.join(", ")}
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Episodes;
