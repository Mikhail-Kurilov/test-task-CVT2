import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import Authorization from "./components/authorization/Authorization";
import Registration from "./components/registration/Registration";
import img from "../../assets/img/randm.png";

const PAGE_STATUS = {
  NO_POPUPS: "noPopups",
  REG_POPUP: "regPopup",
  AUTH_POPUP: "authPopup",
};

function Header() {
  const [authStatus, setAuthStatus] = useState(false);
  const [pageStatus, setPageStatus] = useState(PAGE_STATUS.NO_POPUPS);
  const navigate = useNavigate();

  function registrationToggle(value, name, surname) {
    if (value) {
      localStorage.setItem("name", name);
      localStorage.setItem("surname", surname);
      setAuthStatus(true);
      setPageStatus(PAGE_STATUS.NO_POPUPS);
    } else {
      setPageStatus(PAGE_STATUS.REG_POPUP);
    }
  }

  function authorizationToggle(value) {
    if (value) {
      setAuthStatus(true);
      setPageStatus(PAGE_STATUS.NO_POPUPS);
    } else {
      setPageStatus(PAGE_STATUS.AUTH_POPUP);
    }
  }

  function userNameAdd() {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");
    return name && surname ? name && surname : "Иванов И.";
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
    if (authStatus) {
      return (
        <div className="userBox">
          <p className="userName" contentEditable="true">
            {userNameAdd()}
          </p>
          <button className="exitButton" onClick={() => setAuthStatus(false)}>
            Выйти
          </button>
        </div>
      );
    }
    return (
      <div className="RegAuthContainer">
        <button
          className="registrationButton"
          onClick={() => registrationToggle()}
        >
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
          {authStatus ? (
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
        {pageStatus === PAGE_STATUS.AUTH_POPUP ? (
          <Authorization authorizationOn={authorizationToggle} />
        ) : pageStatus === PAGE_STATUS.REG_POPUP ? (
          <Registration authorizationOn={registrationToggle} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Header;
