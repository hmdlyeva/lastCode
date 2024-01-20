import React, { useState } from "react";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <section id="navbar">
      <div className="navbar">
        <div className="container">
          <div className="my">
            <div className="left">
              <h1>Tasty</h1>
            </div>
            <div className="right">
              <ul className="lu">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    navigate("/add");
                  }}
                >
                  Add
                </li>
                <li
                  onClick={() => {
                    navigate("/wish");
                  }}
                >
                  Wishlist
                </li>
                <li
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Basket
                </li>
                <li>Menu</li>
                <li>Specialties</li>
                <li>Reservation</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <FontAwesomeIcon
                className="bar"
                icon={faBarsStaggered}
                style={{ color: "#dbdbdb" }}
                onClick={toggleOpen}
              />

              {isOpen && (
                <div className="side_bar">
                  <ul>
                    <li
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </li>
                    <li
                      onClick={() => {
                        navigate("/add");
                      }}
                    >
                      Add
                    </li>
                    <li
                      onClick={() => {
                        navigate("/wish");
                      }}
                    >
                      Wishlist
                    </li>
                    <li
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      Basket
                    </li>
                    <li>Menu</li>
                    <li>Specialties</li>
                    <li>Reservation</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
