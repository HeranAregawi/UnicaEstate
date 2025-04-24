import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../Layout/ListProperty.css";

import React, { useState } from "react";

const cards = [
  {
    price: "$710,694",
    content: " 4bds | 2 ba| 3,057 sqft",
    address: "111 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image:
      "https://photos.zillowstatic.com/fp/f10e719b0f4bdd04e9e039fdc5c91e64-p_d.webp",
  },
  {
    price: "$650,694",
    content: " 3bds | 5 ba| 3,057 sqft",
    address: "8543 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image: "https://ssl.cdn-redfin.com/photo/1/bigphoto/807/2354807_5.jpg",
  },
  {
    price: "$340,694",
    content: " 2bds | 6 ba| 3,057 sqft",
    address: "453 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image:
      "https://photos.zillowstatic.com/fp/cc66af3d063698c84c14fde14ae1764c-p_d.webp",
  },
  {
    price: "$240,694",
    content: " 1bds | 1 ba| 3,057 sqft",
    address: "234 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image:
      "https://photos.zillowstatic.com/fp/44df138daae326190c39f35fe39a427f-p_d.webp",
  },
  {
    price: "$840,694",
    content: " 5bds | 3 ba| 3,057 sqft",
    address: "8761 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image: "https://ssl.cdn-redfin.com/photo/1/bigphoto/844/2029844_0.jpg",
  },
];

const ListProperty = () => {
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const maxCards = isMobile ? 1 : 3;
  const handleNext = () => {
    if (startIndex + maxCards < cards.length) {
      setStartIndex(startIndex + maxCards);
    }
  };

  const handlePrev = () => {
    if (startIndex >= 0) {
      setStartIndex(startIndex - maxCards);
    }
  };

  const visibleCards = cards.slice(startIndex, startIndex + maxCards);
  const cursorBackArrow = startIndex > 0 ? "cursor-pointer" : "cursor-disabled";
  const cursorForwardArrow =
    startIndex + maxCards >= cards.length
      ? "cursor-disabled"
      : "cursor-pointer";

  return (
    <>
      <Box className="BoxTypographyListProperty">
        <Typography className="TypographyListRecommended">
          Recommended for you
        </Typography>
        <Typography className="Typography">
          Trending Properties in Addis Ababa, Ethiopia
        </Typography>
      </Box>
      <Box className="BoxListProperty">
        <ArrowBackIosIcon
          className={cursorBackArrow}
          onClick={startIndex > 0 ? handlePrev : undefined}
        ></ArrowBackIosIcon>
        {visibleCards.map((card) => (
          <Card className="CardListProperty">
            <CardMedia
              className="cardMediaListProperty"
              component="img"
              alt="responsive"
              image={card.image}
            />
            <Box className="BoxCardContent">
              <CardContent className="CardContent">
                <Typography className="TypographyPrice">
                  {card.price}
                </Typography>
                <Typography className="TypographyInfo">
                  {card.content}
                </Typography>
                <Typography className="TypographyAddress">
                  {card.address}
                </Typography>
                <Typography className="TypographyListInfo">
                  Listing providing by {card.listProvider}
                </Typography>
              </CardContent>
              <CardActions className="CardActions">
                <IconButton
                  aria-label="add to favorites"
                  className="FavoriteIconButton"
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" className="ShareIconButton">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        ))}
        <ArrowForwardIosIcon
          className={cursorForwardArrow}
          onClick={handleNext}
        ></ArrowForwardIosIcon>
      </Box>
    </>
  );
};

export default ListProperty;
