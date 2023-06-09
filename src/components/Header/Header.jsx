import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Sidebar from "../Sidebar";

import logo from "../../assets/images/logo.png";

import "./header.css";

const nav__links = [
  {
    path: "/home",
    display: "صفحه اصلی",
  },
  {
    path: "/tours",
    display: "تور ها",
  },
  {
    path: "/about",
    display: "درباره ما",
  },
  {
    path: "/tours",
    display: "تماس با ما",
  },
  {
    path: "/tours",
    display: "بیمه",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ============== Logo Start ============== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* ============== Logo End============== */}

            {/* ============== menu Start============== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============== menu End============== */}

            {/* ============== Start More ============== */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">ورود</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">ثبت نام</Link>
                </Button>
              </div>

              <Sidebar />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
