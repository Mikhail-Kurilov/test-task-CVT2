import React from "react";
import "./Registration.css";

import UpImg from "../../../../assets/img/up.png";
import leftImg from "../../../../assets/img/left.png";
import rightImg from "../../../../assets/img/right.png";

function Registration({ authorizationOn }) {
  function checkLength(str, min, max) {
    return str.length >= min && str.length <= max;
  }

  function login() {
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const login = document.getElementById("login").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    if (
      checkLength(mail, 6, 50) &&
      /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(mail) &&
      checkLength(login, 6, 20) &&
      checkLength(name, 2, 50) &&
      checkLength(surname, 2, 50) &&
      checkLength(password, 6, 50) &&
      /^[0-9A-Za-z]+$/i.test(password) &&
      password === password2
    ) {
      authorizationOn(true, name, surname);
    } else {
      authorizationOn(false);
    }
  }

  return (
    <div className="registrationWrapper">
      <img className="upImg" src={UpImg}></img>
      <img className="leftImg" src={leftImg}></img>
      <img className="rightImg" src={rightImg}></img>
      <div className="registrationForm">
        <div>
          <p className="regWord">Регистрация</p>
          <span className="regContainer">
            <input
              id="mail"
              className="regInput"
              type="email"
              placeholder="Введите E-mail"
            ></input>
            <input
              id="login"
              className="regInput"
              type="text"
              placeholder="Придумайте логин"
            ></input>
            <input
              id="name"
              className="regInput"
              type="text"
              placeholder="Введите имя"
            ></input>
            <input
              id="surname"
              className="regInput"
              type="text"
              placeholder="Введите фамилию"
            ></input>
            <input
              id="password"
              className="regInput pass"
              type="password"
              placeholder="Введите  пароль"
            ></input>
            <input
              id="password2"
              className="regInput pass"
              type="password"
              placeholder="Повторите  пароль"
            ></input>
          </span>
          <button className="buttonReg" onClick={login}>
            Зарегистрировать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
