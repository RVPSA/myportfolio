import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Stage } from "../components/step";

export const ProjectPage = () => {
  return (
    <Box id="project" sx={{ backgroundColor: "#f0f0f2", padding: 3 }}>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs>
          <Typography
            sx={{
              my: 3,
              fontFamily: "Acme",
              fontSize: 20,
              fontStyle: "italic",
            }}
          >
            Work Experience
          </Typography>
        </Grid>
      </Grid>
      <Stage
        titleL="Associate Software Engineer"
        titleR="Aug 2023 - Present"
        duration={3}
      ></Stage>
      <Stage
        titleL="Jan 2023 - Aug 2023"
        titleR="Intern Software Engineer"
        lStyle={false}
        duration={2}
      ></Stage>
      <Stage titleL="Resume" titleR="2023" bdivder={false} duration={1}></Stage>
    </Box>
  );
};
