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
  // const [menuAnchor, setMenuAnchor] = useState(null);

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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          // pl: 5,
          // pt: 3,
          // pb: 1,
          // pl: { xs: 4, sm: 6, md: 0 }, // Apply different padding for mobile, tablet, and desktop
          // pt: { xs: 1, sm: 2, md: 3 }, // Different top padding
          // pb: { xs: 0.5, sm: 1, md: 2 },
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 0.3,
          ml: 0,
          pl: {
            xs: 3,
            sm: 4,
            md: 5,
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            // fontSize: "1.5rem",
            fontSize: {
              xs: "0.8rem",
              sm: "0.8rem",
              md: "1.5rem",
            },
          }}
        >
          Recommended for you
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "0.5rem",
              sm: "0.5rem",
              md: "0.8rem",
            },
          }}
        >
          Trending Properties in Addis Ababa, Ethiopia
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          // pl: 0,
          // pt: 0,
          // p: { xs: 0, sm: 3, md: 0 }, // Apply different padding for mobile, tablet, and desktop
          pt: { xs: 1, sm: 1, md: 1 }, // Different top padding
          overflowX: "auto",
          // gap: 3,
          gap: {
            xs: 1,
            sm: 1,
            md: 3,
          },
          alignItems: "center",
        }}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: 15,
            p: 0,
            cursor: startIndex > 0 ? "pointer" : "default",
            cursor: startIndex > 0 ? "text.primary" : "grey.400",
          }}
          onClick={startIndex > 0 ? handlePrev : undefined}
        ></ArrowBackIosIcon>
        {visibleCards.map((card) => (
          <Card
            sx={{
              // minWidth: 330,
              minWidth: {
                xs: 230,
                sm: 230,
                md: 330,
              },
              display: "flex",
              flexDirection: "column",
              height: {
                xs: 250,
                sm: 200,
                md: 280,
              },
            }}
          >
            <CardMedia
              component="img"
              alt="responsive"
              image={card.image}
              sx={{
                height: {
                  xs: 160,
                  sm: 100,
                  md: 180,
                },
              }}
            />
            <Box display="flex" justifyContent="space-between" sx={{ p: 0.2 }}>
              <CardContent
                sx={{
                  padding: "1px 1px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    //  fontSize: "1.5rem",
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1rem",
                      md: "1.5rem",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {card.price}
                </Typography>
                <Typography
                  sx={{
                    // fontSize: "1rem"
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                      md: "1rem",
                    },
                  }}
                >
                  {card.content}
                </Typography>
                <Typography
                  sx={{
                    // fontSize: "0.8rem"
                    fontSize: {
                      xs: "0.6rem",
                      sm: "1rem",
                      md: "0.8rem",
                    },
                  }}
                >
                  {card.address}
                </Typography>
                <Typography
                  sx={{
                    // fontSize: "0.6rem"
                    fontSize: {
                      xs: "0.5rem",
                      sm: "1rem",
                      md: "0.6rem",
                    },
                  }}
                >
                  Listing providing by {card.listProvider}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: "7px 7px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0rem",
                }}
              >
                <IconButton aria-label="add to favorites" sx={{ p: 0 }}>
                  <FavoriteIcon
                    sx={{
                      // fontSize: 25
                      fontSize: {
                        xs: "40",
                        sm: "20",
                        md: "25",
                      },
                      p: 0,
                    }}
                  />
                </IconButton>
                <IconButton aria-label="share" sx={{ p: 0, ml: 0.5 }}>
                  <ShareIcon
                    sx={{
                      // fontSize: 25
                      fontSize: {
                        xs: "40",
                        sm: "20",
                        md: "25",
                      },
                      p: 0,
                    }}
                  />
                </IconButton>
              </CardActions>
            </Box>
          </Card>
        ))}
        <ArrowForwardIosIcon
          sx={{
            fontSize: 15,
            p: 0,
            cursor:
              startIndex + maxCards >= cards.length ? "pointer" : "default",
            color:
              startIndex + maxCards >= cards.length
                ? "grey.400"
                : "text.primary",
          }}
          onClick={handleNext}
        ></ArrowForwardIosIcon>
      </Box>
    </>
  );
};

export default ListProperty;
