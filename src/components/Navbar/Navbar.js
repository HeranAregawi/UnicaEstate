import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const menuItems = ["Buy", "Sell", "Rent"];

  return (
    <AppBar className="AppBar">
      <Toolbar className="ToolBar">
        <Typography className="TitleTypography">UnicaEstate</Typography>

        {isMobile ? (
          <Box>
            <Button className="SignInButton">Sign In</Button>
            <IconButton className="MenuIconButton" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <>
            <Box className="AppBarBox">
              <Button className="AppBarButtons">Buy</Button>
              <Button className="AppBarButtons">Sell</Button>
              <Button className="AppBarButtons">Rent</Button>

              <Button className="AppBarButtons">Sign In</Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
