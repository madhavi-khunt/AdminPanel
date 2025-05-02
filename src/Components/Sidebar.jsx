import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Dashboard, Menu, MenuOpen } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

const drawerWidthOpen = 250;
const drawerWidthClosed = 60;

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const drawerWidth = open ? drawerWidthOpen : drawerWidthClosed;

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)", // Shadow for the drawer
            transition: "width 0.3s ease",
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            px: 2,
          }}
        >
          <Typography variant="h6" noWrap sx={{ fontSize: 18 }}>
            {open ? "Admin Panel" : "A"}
          </Typography>
        </Box>

        {/* Sidebar Menu */}
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>
        </List>
      </Drawer>

      {/* Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          pt: 64, // Add top padding to account for AppBar height
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Top Navbar */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#fff",
            color: "#000",
            width: `calc(100% - ${drawerWidth}px)`,
            zIndex: theme.zIndex.drawer + 1, // Ensure AppBar is above the drawer
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)", // Shadow for the AppBar
            border: "none",
            ml: `${drawerWidth}px`, // Align AppBar with the drawer
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton onClick={toggleDrawer}>
              {open ? <MenuOpen /> : <Menu />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        {/* <Box
          component="main"
          sx={{
            p: 3,
            backgroundColor: "#f9fafc",
            minHeight: "100vh",
            transition: "margin-left 0.3s ease",
          }}
        >
          <Outlet />
        </Box> */}
      </Box>
    </Box>
  );
}
