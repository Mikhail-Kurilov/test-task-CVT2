import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import backArrow from "../../../../assets/img/Vector.png";

function Characters() {
  const [cards, setCards] = useState([]);
  const [stripe, setGrid] = useState("Stripes");
  const navigate = useNavigate();

  function handleClickView() {
    setGrid(!stripe);
  }

  useEffect(() => {
    if (!cards.length) {
      axios.get(`https://rickandmortyapi.com/api/character`).then((result) => {
        setCards(result.data.results);
      });
    }
  });

  function handleClickViewStripes() {
    console.log(cards);
    return (
      <ul>
        {cards.map((item, i) => {
          console.log(item, i);
          return (
            <li key={i}>
              <img src={item.image} width="162px" height="162px"></img>
              <span>
                <p>{item.name}</p>
                <p>{item.status}</p>
              </span>
              <span>
                <p>Раса:</p>
                <p>{item.species}</p>
              </span>
              <span>
                <p>Место происхождения:</p>
                <p>{item.origin.name}</p>
              </span>
              <span>
                <p>Последняя локация:</p>
                <p>{item.location.name}</p>
              </span>
              <span>
                <p>Пол:</p>
                <p>{item.gender}</p>
              </span>
              <span>
                <p>Эпизоды:</p>
                <p>
                  {Object.keys(item.episode)[1] +
                    "-" +
                    Object.keys(item.episode)[item.episode.length - 1]}
                </p>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  function handleClickViewGrid() {
    return (
      <ul>
        {cards.map((item, i) => (
          <li>
            <div key={i}>
              <img src={item.image}></img>
            </div>
            <div key={i + 1}>
              <img src={item.image}></img>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  function changeView() {
    return stripe === "Stripes"
      ? handleClickViewStripes()
      : handleClickViewGrid();
  }

  function handleClick() {
    navigate(-1);
  }
  return (
    <div className="charactersWrapper">
      <div className="headerCharactersContainer">
        <div className="backContainer">
          <button onClick={handleClick}>
            <img
              src={backArrow}
              width="15px"
              height="24px"
              alt="backArrow"
            ></img>
          </button>
          <p>Назад</p>
        </div>
        <h3 className="pageTitle">Персонажи</h3>
      </div>
      <div className="navContainer">
        <div className="search name">
          <p></p>
          <input></input>
        </div>
        <div className="search race">
          <p></p>
          <input></input>
        </div>
        <div className="search status">
          <p></p>
          <input></input>
        </div>
        <div className="formContainer">
          <p></p>
          <button className="toggleView active" onClick={handleClickView}>
            123
            <img></img>
          </button>
          <button className="toggleView" onClick={handleClickView}>
            456
            <img></img>
          </button>
        </div>
      </div>
      <div className="charactersContainer">{changeView()}</div>
    </div>
  );
}

export default Characters;
