import React from "react";

function Registration({ loginReg, authorizationOn }) {
  function login() {
    const mail = document.getElementById("mail").value;
    const rem = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const validMail = rem.test(mail);
    const password = document.getElementById("password").value;
    const rep = /^[0-9A-Za-z]+$/i;
    const validPassword = rep.test(password);
    const password2 = document.getElementById("password2").value;
    const rep2 = /^[0-9A-Za-z]+$/i;
    const validPassword2 = rep2.test(password2);
    const login = document.getElementById("login").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    if (
      mail.length >= 6 &&
      mail.length <= 50 &&
      validMail &&
      login.length >= 6 &&
      login.length <= 20 &&
      name.length >= 2 &&
      name.length <= 50 &&
      surname.length >= 2 &&
      surname <= 50 &&
      validPassword &&
      password.length >= 6 &&
      password.length <= 50 &&
      validPassword2 &&
      password2.length >= 6 &&
      password2.length <= 50 &&
      validPassword === validPassword2
    ) {
      authorizationOn(true);
    } else {
      authorizationOn(false);
    }
  }

  if (loginReg) {
    return (
      <div className="registrationWrapper">
        <div className="registrationOff" onClick={authorizationOn}></div>
        <form>
          <p className="regWord">Регистрация</p>
          <span className="regContainer">
            <input id="mail" type="email"></input>
            <input id="login" type="text"></input>
            <input id="name" type="text"></input>
            <input id="surname" type="text"></input>
            <input id="password" type="password"></input>
            <input id="password2" type="password"></input>
          </span>
          <button className="buttonReg" onClick={login}>
            Зарегистрировать
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
