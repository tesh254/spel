import React from "react";
import Link from "next/link";
import styles from "../static/css/nav.scss";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className="nav-icon">
            <Icon icon={faBell} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            <img
              src="/static/img/logo.svg"
              alt="mascot-logo"
              className="logo"
              style={{ width: 55 + "px" }}
            />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/auth">
          <a>Login/Signup</a>
        </Link>
      </li>
    </ul>
    <style jsx>{styles}</style>
  </nav>
);

export default Nav;
