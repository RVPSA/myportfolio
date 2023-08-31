import React, { useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Stage } from "../../../components/step";
import { Assests2 } from "../../../Assests/pdf";

export const WorkExperience = () => {
  const width = window.innerWidth;

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Box
        sx={{
          backgroundColor: "#f0f0f2",
          width: "100%",
          height: "50ch",
          borderRadius: "30% 70% 100% 0% / 23% 0% 100% 77% ",
        }}
      ></Box>

      <Box
        sx={{
          backgroundColor: "#1e1e1f",
          width: "100%",
          height: {
            xs: "55ch",
            sm: "50ch",
          },
          borderRadius: "100% 0% 22% 78% / 100% 83% 17% 0% ",
          position: "absolute",
          left: "0%",
        }}
      ></Box>
      <Box sx={{ position: "absolute", width: "100%" }}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs>
            <Typography
              sx={{
                my: 5,
                fontFamily: "Acme",
                fontSize: 20,
                fontStyle: "italic",
              }}
            >
              Work Experience
            </Typography>
          </Grid>
        </Grid>
        {width < 600 ? (
          <Stage
            titleL="Ascte Software E."
            titleR="Aug 2023 - Present"
            duration={3}
            delay={0.75}
          ></Stage>
        ) : (
          <Stage
            titleL="Associate Software Engineer"
            titleR="Aug 2023 - Present"
            duration={3}
          ></Stage>
        )}

        {width < 600 ? (
          <Stage
            titleL="Jan 2023 - Aug 2023"
            titleR="Intrn Software E."
            lStyle={false}
            duration={2}
            delay={0.75}
          ></Stage>
        ) : (
          <Stage
            titleL="Jan 2023 - Aug 2023"
            titleR="Intern Software Engineer"
            lStyle={false}
            duration={2}
          ></Stage>
        )}

        {width < 600 ? (
          <Link
            href={Assests2.cv.pdf_1}
            download="Sachintha_Akesh_CV"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Stage
              titleL="Resume"
              titleR="2023"
              bdivder={false}
              duration={1}
              delay={0.75}
            ></Stage>
          </Link>
        ) : (
          <Link
            href={Assests2.cv.pdf_1}
            download="Sachintha_Akesh_CV"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Stage
              titleL="Resume"
              titleR="2023"
              bdivder={false}
              duration={1}
            ></Stage>
          </Link>
        )}
      </Box>
    </Box>
  );
};
