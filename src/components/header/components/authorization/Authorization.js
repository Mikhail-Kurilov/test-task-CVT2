import React, { useRef } from "react";
import "./Authorization.css";

import UpImg from "../../../../assets/img/up.png";
import leftImg from "../../../../assets/img/left.png";
import rightImg from "../../../../assets/img/right.png";

function Authorization({ authorizationOn, closePopup, login, mail, password }) {
  const mailLogin = useRef(null);
  const password2 = useRef(null);

  function onLoginSuccess() {
    console.log(login, password);
    if (
      (mailLogin === login && password === password2) ||
      (mailLogin === mail && password === password2)
    ) {
      authorizationOn(true);
    } else {
      authorizationOn(false);
    }
  }

  return (
    <div className="authorizationWrapper">
      <div className="authClose" onClick={() => closePopup()}></div>
      <img className="upImg" src={UpImg}></img>
      <img className="leftImg" src={leftImg}></img>
      <img className="rightImg" src={rightImg}></img>
      <div className="authorizationForm">
        <h3 className="authWord">Вход</h3>
        <span className="authContainer">
          <input
            id="mailLogin"
            className="authInput"
            type="text"
            placeholder="Введите логин или E-mail"
            ref={mailLogin}
          ></input>
          <input
            id="password"
            className="authInput pass"
            type="password"
            placeholder="Введите пароль"
            ref={password2}
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

        <button className="buttonAuth" onClick={onLoginSuccess}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default Authorization;
