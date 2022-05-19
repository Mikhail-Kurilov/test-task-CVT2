import React, { useRef } from "react";
import "./Registration.css";

import UpImg from "../../../../assets/img/up.png";
import leftImg from "../../../../assets/img/left.png";
import rightImg from "../../../../assets/img/right.png";

function Registration({ authorizationOn, closePopup, onSuccessRegistration }) {
  const mail = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);
  const login = useRef(null);
  const name = useRef(null);
  const surname = useRef(null);

  function checkLength(str, min, max) {
    return str.length >= min && str.length <= max;
  }

  function onButtonClick() {
    const mailText = mail.current.value;
    const passwordText = password.current.value;
    const loginText = login.current.value;
    if (
      checkLength(mailText, 6, 50) &&
      /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(mailText) &&
      checkLength(loginText, 6, 20) &&
      checkLength(name.current.value, 2, 50) &&
      checkLength(surname.current.value, 2, 50) &&
      checkLength(passwordText, 6, 50) &&
      /^[0-9A-Za-z]+$/i.test(passwordText) &&
      passwordText === password2.current.value
    ) {
      authorizationOn(true, name.current.value, surname.current.value);
      onSuccessRegistration(loginText, mailText, passwordText);
    } else {
      authorizationOn(false);
    }
  }

  return (
    <div className="registrationWrapper">
      <div className="registrationClose" onClick={() => closePopup()}></div>
      <img className="upImg" src={UpImg}></img>
      <img className="leftImg" src={leftImg}></img>
      <img className="rightImg" src={rightImg}></img>
      <div className="registrationForm">
        <div>
          <h3 className="regWord">Регистрация</h3>
          <span className="regContainer">
            <input
              id="mail"
              className="regInput"
              type="email"
              placeholder="Введите E-mail"
              ref={mail}
            ></input>
            <input
              id="login"
              className="regInput"
              type="text"
              placeholder="Придумайте логин"
              ref={login}
            ></input>
            <input
              id="name"
              className="regInput"
              type="text"
              placeholder="Введите имя"
              ref={name}
            ></input>
            <input
              id="surname"
              className="regInput"
              type="text"
              placeholder="Введите фамилию"
              ref={surname}
            ></input>
            <input
              id="password"
              className="regInput pass"
              type="password"
              placeholder="Введите  пароль"
              ref={password}
            ></input>
            <input
              id="password2"
              className="regInput pass"
              type="password"
              placeholder="Повторите  пароль"
              ref={password2}
            ></input>
          </span>
          <button className="buttonReg" onClick={onButtonClick}>
            Зарегистрировать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
