import React from "react";
import "./blog.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
const Blog = () => {
  return (
    <section id="blog">
      <div className="blog">
        <div className="container">
          <div className="my">
            <h1>Recent Blog</h1>
            <div className="cards">
              <Swiper
                // slidesPerView={3}s
                // spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  400: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <Card className="card" >
                    <div className="image"></div>
                    <CardContent>
                      <Typography
                        className="pp"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        July 7, 2018 Admin
                      </Typography>
                      <Typography
                        className="font"
                        variant="body2"
                        color="text.secondary"
                      >
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </Typography>
                    </CardContent>
                    <CardActions className="df">
                      <Button className="button" size="small">
                        Read more
                      </Button>
                      <div>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span> 3</span>
                      </div>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="card" >
                    <div className="image"></div>
                    <CardContent>
                      <Typography
                        className="pp"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        July 7, 2018 Admin
                      </Typography>
                      <Typography
                        className="font"
                        variant="body2"
                        color="text.secondary"
                      >
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </Typography>
                    </CardContent>
                    <CardActions className="df">
                      <Button className="button" size="small">
                        Read more
                      </Button>
                      <div>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span> 3</span>
                      </div>
                    </CardActions>
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card className="card" >
                    <div className="image"></div>
                    <CardContent>
                      <Typography
                        className="pp"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        July 7, 2018 Admin
                      </Typography>
                      <Typography
                        className="font"
                        variant="body2"
                        color="text.secondary"
                      >
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </Typography>
                    </CardContent>
                    <CardActions className="df">
                      <Button className="button" size="small">
                        Read more
                      </Button>
                      <div>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span> 3</span>
                      </div>
                    </CardActions>
                  </Card>
                </SwiperSlide>

                <SwiperSlide>
                  <Card className="card" sx={{ maxWidth: 385 }}>
                    <div className="image"></div>
                    <CardContent>
                      <Typography
                        className="pp"
                        gutterBottom
                        variant="p"
                        component="div"
                      >
                        July 7, 2018 Admin
                      </Typography>
                      <Typography
                        className="font"
                        variant="body2"
                        color="text.secondary"
                      >
                        Even the all-powerful Pointing has no control about the
                        blind texts
                      </Typography>
                    </CardContent>
                    <CardActions className="df">
                      <Button className="button" size="small">
                        Read more
                      </Button>
                      <div>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span> 3</span>
                      </div>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
