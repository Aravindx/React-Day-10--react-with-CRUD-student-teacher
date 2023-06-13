import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";
function Topbar() {
  const userData = useContext(UserContext);
  return (
    <>
      <nav
        className="navbar navbar-light "
        style={{
          backgroundImage:
            "linear-gradient(to right, #6d2dee, #7438ef, #7b42ef, #824cf0, #8855f0, #8f5ff0, #9569ef, #9b72ef, #a37eee, #ab8bec, #b397ea, #baa3e8)",
        }}
      >
        <div className="container-fluid">
          <div className="container-fluid">
            <span className="mr-2 d-none d-lg-inline text-gray-900">
              <img
                className="img-profile rounded-circle"
                style={{ width: 30 }}
                src="https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png"
              />
              ARAVIND M
            </span>
            <div>
              <Link
                className="btn btn-outline-danger btn-sm text-gray-900"
                to="/"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
