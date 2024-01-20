import React, { useEffect } from "react";
import "./detail.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToWishList, getData } from "../../redux/slice/slice";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/homepages/footer/Footer";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Detail = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  let { id } = useParams()

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(id);
  let p = products.find((p) => p._id === id);

  console.log(p);
  return (
    <section id="detail">
      <div className="detail">
        <Navbar />
        <div className="container">
          <div className="my">
            <div className="card">
              {p ? (
                <Card key={p._id} className="card" sx={{ width: 345 }}>
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
              ) : (
                <h1>not found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Detail;
