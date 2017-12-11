import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  let count = 0;
  return (
    <header>
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a href="" className="navbar-item" to="/">
            <h1 className="title">Weather App</h1>
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarMe"
            onClick={() => {
              if (count === 0) {
                document.querySelector('#navbarMe').style.display = 'block';
                count++;
              } else {
                document.querySelector('#navbarMe').style.display = 'none';
                count = 0;
              }
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarMe" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="nav-level level-item">
                <NavLink exact activeClassName="active" to="/">
                  <span className="title is-6">Weather</span>
                </NavLink>
              </div>
              <div className="nav-level level-item">
                <NavLink activeClassName="active" to="/sunrise">
                  <span className="title is-6">Sunrise/Sunset</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
