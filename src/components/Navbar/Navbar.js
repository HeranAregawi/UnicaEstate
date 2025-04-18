import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#fff" }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          minHeight: 48,
          height: 48,
          px: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          UnicaEstate
        </Typography>

        <Box sx={{ display: "flex", gap: "0" }}>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "black",
              textTransform: "none",
              padding: "1px 4px",
              minWidth: "auto", // removes min-width restriction
              fontSize: "0.6rem",
            }}
          >
            Buy
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "black",
              textTransform: "none",
              minWidth: "auto",
              padding: "1px 4px",
              fontSize: "0.6rem",
            }}
          >
            Sell
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "black",
              textTransform: "none",
              minWidth: "auto",
              padding: "1px 4px",
              fontSize: "0.6rem",
            }}
          >
            Rent
          </Button>

          <Button
            variant="text"
            sx={{
              color: "black",
              fontSize: "0.6rem",
              padding: "1px 4px",
              textTransform: "none",
              minWidth: "auto",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
