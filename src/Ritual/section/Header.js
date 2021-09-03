import React from 'react';
import LocalMallIcon from "@material-ui/icons/LocalMall";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
        <div className="top-line"></div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#" className="header-ritual">
              Ritual
            </a>
          </li>
          <li>
            <a href="#" className="header-adjustIcon-Who">
              Who We Are
            </a>
            <a href="#" className="header-adjustIcon-Mall">
              <LocalMallIcon />
            </a>
          </li>
        </ul>
      </div>
    )
}

export default Header;
