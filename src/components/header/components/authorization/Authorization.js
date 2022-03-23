import React from "react";

function Authorization({ loginReg, authorizationOn }) {
  function login() {
    const mail = document.getElementById("mail").value;
    const rem = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const validMail = rem.test(mail);
    const password = document.getElementById("password").value;
    const rep = /^[0-9A-Za-z]+$/i;
    const validPassword = rep.test(password);

    const login = document.getElementById("login").value;

    if (
      mail.length >= 6 &&
      mail.length <= 50 &&
      validMail &&
      login.length >= 6 &&
      login.length <= 20 &&
      validPassword &&
      password.length >= 6 &&
      password.length <= 50
    ) {
      authorizationOn(true);
    } else {
      authorizationOn(false);
    }
  }

  if (loginReg) {
    return (
      <div className="authorizationWrapper">
        <div className="authorizationOff" onClick={authorizationOn}></div>
        <form>
          <p className="authWord">Вход</p>
          <span className="regContainer">
            <input id="mail" type="email"></input>
            <input id="login" type="text"></input>
            <input id="password" type="password"></input>
          </span>
          <span>
            <input id="checkMark" type="checkbox"></input>
            <label className="remember" htmlFor="checkMark">
              Запомнить
            </label>
          </span>
          <button className="buttonAuth" onClick={login}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

export default Authorization;
