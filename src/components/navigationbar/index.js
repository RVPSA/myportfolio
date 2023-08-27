import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const NavigationBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        position: "fixed",
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Box>
            <Typography>My Logo</Typography>
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography>About</Typography>
            <Typography>Projects</Typography>
            <Typography>Publications</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
