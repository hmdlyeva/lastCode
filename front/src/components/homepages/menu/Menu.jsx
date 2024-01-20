import React, { useEffect, useState } from "react";
import "./menu.scss";
import { useSelector, useDispatch } from "react-redux";
import { getData, addToWishList, addToCart } from "../../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faUtensils,
  faChampagneGlasses,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Menu = () => {
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.products.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  const navigate = useNavigate();

  const [sortingcriteria, setSortingcriteria] = useState("");

  const handlesort = (value) => {
    setSortingcriteria(value);
  };

  const getsortedprod = () => {
    switch (sortingcriteria) {
      case "a":
        return [...products].sort((p, q) => p.name.localeCompare(q.name));
      case "z":
        return [...products].sort((p, q) => q.name.localeCompare(p.name));
      case "price":
        return [...products].sort((p, q) => p.price - q.price);

      default:
        return products;
    }
  };

  const sortedprod = getsortedprod();

  const [Products, setProducts] = useState([]);

  return (
    <section id="menu">
      <div className="menu">
        <div className="container">
          <div className="my">
            <h1>Discover Our Exclusive Menu</h1>

            <select
              name=""
              id=""
              value={sortingcriteria}
              onChange={(e) => handlesort(e.target.value)}
            >
              <option value="a">A-Z</option>
              <option value="z">Z-A</option>
              <option value="price">Price</option>
            </select>
            <div className="buttons">
              <button
                onClick={() => {
                  let main = products.filter((p) => p.category === "main");
                  setProducts(main);
                }}
              >
                <FontAwesomeIcon icon={faBowlFood} />
                <span> Main</span>
              </button>
              <button
                onClick={() => {
                  let dessert = products.filter(
                    (p) => p.category === "dessert"
                  );
                  setProducts(dessert);
                }}
              >
                <FontAwesomeIcon icon={faUtensils} />
                <span> Dessert</span>
              </button>
              <button
                onClick={() => {
                  let drink = products.filter((p) => p.category === "drink");
                  setProducts(drink);
                }}
              >
                <FontAwesomeIcon icon={faChampagneGlasses} />
                <span> Drinks</span>
              </button>
            </div>

            <div className="cards">
              {Products.length > 0
                ? Products.map((p) => (
                    <div
                      key={p._id}
                      className="card"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`detail/${p._id}`);
                      }}
                    >
                      <div className="left">
                        <img src={p.image} alt="" />
                        <div className="detail">
                          <p className="font">{p.name}</p>
                          {/* <p>{p.category}</p> */}
                          <p>{p.detail}</p>
                        </div>
                      </div>
                      <div className="right">
                        <p>${p.price}</p>

                        {wishlist.find((q) => q._id === p._id) ? (
                          <FontAwesomeIcon
                            className="heart"
                            icon={faHeart}
                            style={{ color: "red" }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              dispatch(addToWishList(p));
                              // alert("wished");
                            }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className="heart"
                            icon={faHeart}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              dispatch(addToWishList(p));
                              // alert("wished");
                            }}
                          />
                        )}
                        <FontAwesomeIcon
                          style={{ color: "#ff9500" }}
                          icon={faBasketShopping}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(addToCart(p));
                          }}
                        />
                      </div>
                    </div>
                  ))
                : sortedprod.map((p) => (
                    <div
                      key={p._id}
                      className="card"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`detail/${p._id}`);
                      }}
                    >
                      <div className="left">
                        <img src={p.image} alt="" />
                        <div className="detail">
                          <p className="font">{p.name}</p>
                          <p>{p.detail}</p>
                        </div>
                      </div>
                      <div className="right">
                        <p>${p.price}</p>

                        {wishlist.find((q) => q._id === p._id) ? (
                          <FontAwesomeIcon
                            className="heart"
                            icon={faHeart}
                            style={{ color: "red" }}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              dispatch(addToWishList(p));
                              // alert("wished");
                            }}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className="heart"
                            icon={faHeart}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              dispatch(addToWishList(p));
                              // alert("wished");
                            }}
                          />
                        )}
                        <FontAwesomeIcon
                          style={{ color: "#ff9500" }}
                          icon={faBasketShopping}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(addToCart(p));
                          }}
                        />
                      </div>
                    </div>
                  ))}
            </div>

            <div className="footer_menu">
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost
              </p>
              <button>Make a Reservation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
