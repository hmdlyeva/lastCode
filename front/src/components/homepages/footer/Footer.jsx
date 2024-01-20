import React from "react";
import "./foot.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="my">
            <div className="first">
              <h1>Tasty</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="icons">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#696969" }}
                />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <div className="second">
              <h1>Opening Hours</h1>
              <div className="week">
                <span className="color">Monday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Tuesday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Wednesday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Thursday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Friday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Saturday: </span>
                <span>08:-22:00</span>
              </div>
              <div className="week">
                <span className="color">Sunday: </span>
                <span>08:-22:00</span>
              </div>
            </div>
            <div className="three">
              <h1>Contact Information</h1>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>

              <p>+ 1235 2355 98</p>
              <p>info@yoursite.com</p>
              <p>email@email.com</p>
            </div>
            <div className="four">
              <h1>Newsletter</h1>
              <p>
                Far far away, behind the word mountains, far from the countries.
              </p>

              <input type="text" name="" id="" placeholder="Subscribe" />
              <FontAwesomeIcon
                className="plane"
                icon={faPaperPlane}
                style={{ color: "#858585" }}
              />
            </div>
          </div>
          <div className="last">
            <p>
              Copyright ©2024 All rights reserved | This template is made with
              💜 by Colorlib
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
