import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://www.freshpalace.com/wp-content/uploads/2012/11/Italian-House-Olive-Trees-Traditional-Stone.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
        fontSize: "2rem",
        fontWeight: "bold",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
        Find Your Dream Property
      </Typography>
      <Paper
        component="form"
        sx={{
          // p: "1px 2px",
          display: "flex",
          width: 250,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, fontSize: "8px" }}
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ fontSize: 15 }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default HeroBanner;
