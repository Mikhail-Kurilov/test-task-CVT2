import React, { useState } from "react";
import "./Header.css";

import Authorization from "./components/authorization/Authorization";
import Registration from "./components/registration/Registration";
import img from "../../assets/img/randm.png";

function Header() {
  const [login, setLogin] = useState(false);

  function authorizationOn() {
    setLogin(!login);
  }

  function authorizationOff() {
    setLogin(login);
  }

  function userNameAdd() {
    return localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : "Иванов И.";
  }

  function userNameSaveStorage(event) {
    const userName = event.target.innerHTML;
    let name = userName.replaceAll("&nbsp", "");
    name = name.trim();
    if (name !== "") {
      localStorage.setItem("userName", name);
    }
  }

  function authorization() {
    if (!login) {
      return (
        <div className="userBox">
          <p className="UserName" contentEditable="true">
            {userNameAdd} {userNameSaveStorage}
          </p>
          <button className="enterButton" onClick={authorizationOff}>
            Выйти
          </button>
        </div>
      );
    } else
      return (
        <div>
          <button
            className="registrationButton"
            /*  onClick={
              <Registration
                loginReg={login}
                authorizationOn={authorizationOn}
              />
            }  */
          >
            Регистрация
          </button>
          <button
            className="exitButton"
            /*    onClick={
              <Authorization
                loginAuth={login}
                authorizationOn={authorizationOn}
              />
            } */
          >
            Войти
          </button>
        </div>
      );
  }

  return (
    <div className="header">
      <div className="imageWrapper">
        <img src={img}></img>
      </div>
      <div className="buttonContainer">
        <button className="mainButton">Главная</button>
        {login ? <button className="chooseButton">Избранное</button> : <div />}
        <button className="anoutButton">О проекте</button>
      </div>
      <div className="registrationContainer">{authorization}</div>
    </div>
  );
}

export default Header;
