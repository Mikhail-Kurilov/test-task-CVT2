import React from "react";
import "./Authorization.css";

import UpImg from "../../../../assets/img/up.png";
import leftImg from "../../../../assets/img/left.png";
import rightImg from "../../../../assets/img/right.png";

function Authorization({ authorizationOn }) {
  function checkLength(str, min, max) {
    return str.length >= min && str.length <= max;
  }

  function login() {
    const mailLogin = document.getElementById("mailLogin").value;
    const password = document.getElementById("password").value;

    if (
      (/^[0-9A-Za-z]+$/i.test(password) &&
        checkLength(password, 6, 50) &&
        checkLength(mailLogin, 6, 20)) ||
      (/^[0-9A-Za-z]+$/i.test(password) &&
        checkLength(mailLogin, 6, 50) &&
        /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(mailLogin))
    ) {
      authorizationOn(true);
    } else {
      authorizationOn(false);
    }
  }

  return (
    <div className="authorizationWrapper">
      <img className="upImg" src={UpImg}></img>
      <img className="leftImg" src={leftImg}></img>
      <img className="rightImg" src={rightImg}></img>
      <div className="authorizationForm">
        <p className="authWord">Вход</p>
        <span className="authContainer">
          <input
            id="mailLogin"
            className="authInput"
            type="text"
            placeholder="Введите логин или E-mail"
          ></input>
          <input
            id="password"
            className="authInput pass"
            type="password"
            placeholder="Введите пароль"
          ></input>
        </span>
        <div className="memWrapper">
          <span className="memorizeBox">
            <input id="checkMark" type="checkbox"></input>
            <label className="remember" htmlFor="checkMark">
              Запомнить
            </label>
          </span>
        </div>

        <button className="buttonAuth" onClick={login}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default Authorization;
