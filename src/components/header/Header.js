import { useEffect, useState, useRef } from "react";
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

const PAGE_ACTIVE = {
  INACTIVE_PAGE: "inactivePage",
  MAIN_PAGE: "mainPage",
  ABOUT_PAGE: "aboutPage",
  SELECT_PAGE: "selectPage",
};

function Header() {
  const [authStatus, setAuthStatus] = useState(false);
  const [pageStatus, setPageStatus] = useState(PAGE_STATUS.NO_POPUPS);
  const [pageActive, setPageActive] = useState(PAGE_ACTIVE.INACTIVE_PAGE);
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mainPage = useRef(null);
  const aboutPage = useRef(null);
  const selectPage = useRef(null);

  useEffect(() => {
    if (window.location.pathname === "/") {
      mainPage.current.className = "active";
    } else if (window.location.pathname === "/about") {
      aboutPage.current.className = "active";
    } else if (window.location.pathname === "/select") {
      selectPage.current.className = "active";
    }
  });

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

  function closePopup() {
    setPageStatus(PAGE_STATUS.NO_POPUPS);
  }

  function getOut() {
    //localStorage.clear();
    setAuthStatus(false);
  }

  function userNameAdd() {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");
    return name && surname
      ? surname + " " + name.slice(0, 1) + "."
      : "Иванов И.";
  }

  function handleClickAbout() {
    setPageActive(PAGE_ACTIVE.ABOUT_PAGE);
    navigate("/about");
  }

  function handleClickMain() {
    setPageActive(PAGE_ACTIVE.MAIN_PAGE);
    navigate("/");
  }

  function handleClickSelect() {
    setPageActive(PAGE_ACTIVE.SELECT_PAGE);
    navigate("/select");
  }

  function authorization() {
    if (authStatus) {
      return (
        <div className="userBox">
          <p className="userName" contentEditable="true">
            {userNameAdd()}
          </p>
          <button className="exitButton" onClick={getOut}>
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
        <button
          className="enterButton"
          onClick={() => setPageStatus(PAGE_STATUS.AUTH_POPUP)}
        >
          Войти
        </button>
      </div>
    );
  }

  const onSuccessRegistration = (login, mail, password) => {
    setLogin(login);
    setMail(mail);
    setPassword(password);
    //closePopup();
  };

  return (
    <header className="header">
      <div className="headerWrapper">
        <div className="imageWrapper">
          <img src={img} width="112px" height="112px" alt="RickAndMorty"></img>
        </div>
        <div className="buttonContainer">
          <div className="navButtons">
            <button
              className={
                pageActive === "mainPage" ? "active" : "relocationButton"
              }
              onClick={handleClickMain}
              ref={mainPage}
            >
              Главная
            </button>
            {authStatus ? (
              <button
                className={
                  pageActive === "selectPage" ? "active" : "relocationButton"
                }
                onClick={handleClickSelect}
                ref={selectPage}
              >
                Избранное
              </button>
            ) : (
              <div />
            )}
            <button
              className={
                pageActive === "aboutPage" ? "active" : "relocationButton"
              }
              onClick={handleClickAbout}
              ref={aboutPage}
            >
              О проекте
            </button>
          </div>
          <div className="registrationContainerWrapper">
            <div className="registrationContainer">{authorization()}</div>
            {pageStatus === PAGE_STATUS.AUTH_POPUP ? (
              <Authorization
                login={login}
                mail={mail}
                password={password}
                authorizationOn={authorizationToggle}
                closePopup={closePopup}
              />
            ) : pageStatus === PAGE_STATUS.REG_POPUP ? (
              <Registration
                authorizationOn={registrationToggle}
                closePopup={closePopup}
                onSuccessRegistration={onSuccessRegistration}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
