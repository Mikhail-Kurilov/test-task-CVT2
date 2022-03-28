import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import Authorization from "./components/authorization/Authorization";
import Registration from "./components/registration/Registration";
import img from "../../assets/img/randm.png";

function Header() {
  const [openRegistration, setOpenRegistration] = useState(false);
  const [openAuthorization, setOpenAuthorization] = useState(false);
  const navigate = useNavigate();

  function registrationToggle() {
    setOpenRegistration(!openRegistration);
  }

  function authorizationToggle() {
    setOpenAuthorization(!openAuthorization);
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

  function handleClickAbout() {
    document
      .querySelectorAll(".relocationButton")
      .forEach((elem) => elem.classList.toggle("active"));
    navigate("/about");
  }

  function handleClickMain() {
    document
      .querySelectorAll(".relocationButton")
      .forEach((elem) => elem.classList.toggle("active"));
    navigate("/");
  }

  function handleClickSelect() {
    document
      .querySelectorAll(".relocationButton")
      .forEach((elem) => elem.classList.toggle("active"));
    navigate("/select");
  }

  function authorization() {
    if (openAuthorization) {
      return (
        <div className="userBox">
          <p className="UserName" contentEditable="true">
            {userNameAdd()} {userNameSaveStorage()}
          </p>
          <button className="exitButton" onClick={registrationToggle}>
            Выйти
          </button>
        </div>
      );
    }
    return (
      <div>
        <button className="registrationButton" onClick={registrationToggle}>
          Регистрация
        </button>
        <button className="enterButton" onClick={authorizationToggle}>
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="imageWrapper">
          <img src={img} width="112px" height="112px" alt="RickAndMorty"></img>
        </div>
        <div className="buttonContainer">
          <button className="relocationButton active" onClick={handleClickMain}>
            Главная
          </button>
          {openAuthorization ? (
            <button className="relocationButton" onClick={handleClickSelect}>
              Избранное
            </button>
          ) : (
            <div />
          )}
          <button className="relocationButton" onClick={handleClickAbout}>
            О проекте
          </button>
        </div>
        <div className="registrationContainer">{authorization()}</div>
        <div>
          {
            <Authorization
              loginReg={openAuthorization}
              authorizationOn={authorizationToggle}
            />
          }
        </div>
        <div>
          {
            <Registration
              loginReg={openRegistration}
              authorizationOn={registrationToggle}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
