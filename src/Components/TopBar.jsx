import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Topbar = ({ handleDrawerToggle, open }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          {open ? <MenuIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
