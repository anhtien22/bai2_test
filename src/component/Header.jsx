import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          STUDENTS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link mx-2 active" aria-current="page" href="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank">
                <i className="fab fa-google-plus-square" />
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="" target="blank">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;