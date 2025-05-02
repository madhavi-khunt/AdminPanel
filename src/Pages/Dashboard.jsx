import React from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";

function Dashboard() {
  return (
    <Box
      sx={{
        bgcolor: "#f4f6f8",
        borderRadius: 2,
        padding: 3,
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1">
        Welcome to the Admin Dashboard. Start managing your content here.
      </Typography>
    </Box>
  );
}

export default Dashboard;
