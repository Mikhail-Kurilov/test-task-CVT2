import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Locations() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`).then((results) => {
      setCards(results);
    });
  });

  function handleClick() {
    navigate(-1);
  }
  return (
    <div className="charactersWrapper">
      <div className="headerCharactersContainer">
        <div className="backContainer">
          <button onClick={handleClick}>
            <img></img>
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
          <button></button>
          <img></img>
          <button>
            <img></img>
          </button>
        </div>
      </div>
      <div className="charactersContainer">
        {cards.map((items) => (
          <th key="">{items.results}</th>
        ))}
      </div>
    </div>
  );
}

export default Locations;
