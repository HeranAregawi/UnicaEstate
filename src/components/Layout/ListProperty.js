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
} from "@mui/material";

import React from "react";

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
    image: "https://photos.zillowstatic.com/fp/cc66af3d063698c84c14fde14ae1764c-p_d.webp",
  },
  {
    price: "$240,694",
    content: " 1bds | 1 ba| 3,057 sqft",
    address: "234 69th Pl NE, Marysville, WA",
    listProvider: "Unicachain",
    image: "https://photos.zillowstatic.com/fp/44df138daae326190c39f35fe39a427f-p_d.webp",
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
  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 2,
          pt:3,
          pb:1,
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
          Recommended for you
        </Typography>
        <Typography sx={{ fontSize: "0.4rem" }}>
          Trending Properties in Addis Ababa, Ethiopia
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          p: 2,
          pt:0,
          alignItems: "flex-start",
          overflowX: "auto",
          gap: 2,
        }}
      >
        {cards.map((card) => (
          <Card
            sx={{
              minWidth: 200,
              display: "flex",
              flexDirection: "column",
              height: 145,
            }}
          >
            <CardMedia component="img" height="90" image={card.image} />
            <Box display="flex" justifyContent="space-between" sx={{ p: 0.2 }}>
              <CardContent
                sx={{
                  padding: "1px 1px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
                  {card.price}
                </Typography>
                <Typography sx={{ fontSize: "0.5rem" }}>
                  {card.content}
                </Typography>
                <Typography sx={{ fontSize: "0.5rem" }}>
                  {card.address}
                </Typography>
                <Typography sx={{ fontSize: "0.3rem" }}>
                  Listing providing by {card.listProvider}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: "1px 1px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0rem",
                }}
              >
                <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
                  <FavoriteIcon sx={{ fontSize: 15, p: 0 }} />
                </IconButton>
                <IconButton aria-label="share" sx={{ p: 0, ml: 0.5 }}>
                  <ShareIcon sx={{ fontSize: 15, p: 0 }} />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ListProperty;
