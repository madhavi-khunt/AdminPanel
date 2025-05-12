import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Dashboard</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} style={{ padding: '20px', height: '100px' }}>
            <Typography variant="h6">Card 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={1} style={{ padding: '20px', height: '100px' }}>
            <Typography variant="h6">Card 2</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Dashboard;