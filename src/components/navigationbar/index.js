import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

export const NavigationBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        position: "fixed",
        zIndex: 1,
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
            <Link to="about" smooth={true} offset={-75} duration={500}>
              <Typography>About</Typography>
            </Link>
            <Link to="project" smooth={true} offset={-75} duration={500}>
              <Typography>Projects</Typography>
            </Link>
            <Link to="publication" smooth={true} offset={-430} duration={500}>
              <Typography>Publications</Typography>
            </Link>
            <Link to="contact" smooth={true} offset={-430} duration={500}>
              <Typography>Contact</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
