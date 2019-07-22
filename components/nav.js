import React from "react";
import Link from "next/link";
import styles from "../static/css/nav.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { auth, firebase } from "../firebase";

class Nav extends React.Component {
  state = {
    route: {
      href: ""
    },
    avatar: "",
    menu: false
  };
  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({
          route: {
            href: "#",
            name: ""
          },
          avatar: authUser.photoURL
        });
      } else {
        this.setState({
          route: {
            href: "/auth",
            name: "Login/Signup"
          },
          avatar: ""
        });
      }
    });
  }

  handleMenu = e => {
    e.preventDefault();

    const { menu } = this.state;
    if (menu) {
      this.setState({
        menu: false
      });
    } else {
      this.setState({
        menu: true
      });
    }
  };
  render() {
    const { route, avatar, menu } = this.state;
    return (
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
            <Link href={route.href}>
              {route.name ? (
                <a>{route.name}</a>
              ) : (
                <a>
                  <div className="dropdown" onClick={this.handleMenu}>
                    <img
                      src={avatar || "/static/img/user.png"}
                      alt="avatar"
                      style={{ width: "37px", borderRadius: "50%" }}
                    />
                    {menu ? (
                      <ul className="dropdown-content">
                        <li className="dropdown-item">
                          <Link href="#">
                            <a className="dropdown-item-link">Profile</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link href="#">
                            <a className="dropdown-item-link">Profile</a>
                          </Link>
                        </li>
                        <li className="dropdown-item">
                          <Link href="#">
                            <a className="dropdown-item-link">Logout</a>
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </a>
              )}
            </Link>
          </li>
        </ul>
        <style jsx>{styles}</style>
      </nav>
    );
  }
}

export default Nav;
