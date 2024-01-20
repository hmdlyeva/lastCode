import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWishList, getData } from "../../redux/slice/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./wish.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/homepages/footer/Footer";
const Wishlist = () => {
  const products = useSelector((state) => state.products.wishlist);
  const dispatch = useDispatch();
  return (
    <section id="wish">
      <Navbar />
      <div className="wish">
        <div className="container">
          <div className="my">
            <div className="cards">
              {products &&
                products.map((p) => (
                  <Card className="card" sx={{ width: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={p.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        className="pp"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        {p.name}
                      </Typography>
                      <Typography
                        className="font"
                        variant="body2"
                        color="text.secondary"
                      >
                        {p.detail}
                      </Typography>
                    </CardContent>
                    <CardActions className="df">
                      <Button className="button" size="small">
                        Read more
                      </Button>
                      <FontAwesomeIcon
                        icon={faHeart}
                        onClick={() => {
                          dispatch(addToWishList(p));
                        }}
                      />
                    </CardActions>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Wishlist;
