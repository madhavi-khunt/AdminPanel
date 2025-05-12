import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/TopBar";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
            <div style={{ flex: 1, padding: "20px" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
