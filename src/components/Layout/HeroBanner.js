import SearchIcon from "@mui/icons-material/Search";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";
import "../Layout/HeroBanner.css";

const HeroBanner = () => {
  return (
    <Box className="Box">
      <Typography className="HeroBannerTitle">
        Find Your Dream Property
      </Typography>
      <Paper className="SearchPaper" component="form">
        <InputBase
          className="SearchInputBase"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          inputProps={{ "aria-label": "Search input for location" }}
        />
        <IconButton type="button" className="SearchButton" aria-label="search">
          <SearchIcon className="SearchIcon" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default HeroBanner;
