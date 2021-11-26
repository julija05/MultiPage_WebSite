import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HOME, SERVICES } from "../../../routing/routes";
import { Nav } from "./style";
import { useLocation } from "react-router-dom";

function NavbarElement() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid  ">
          <div className="hidden-xs">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  }
                  to={HOME}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  }
                  to={SERVICES}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  }
                  to={ABOUT}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    splitLocation[1] === "" ? "active nav-link" : "nav-link"
                  }
                  to={CONTACT}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </div>
  );
}

export default NavbarElement;
