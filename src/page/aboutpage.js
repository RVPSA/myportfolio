import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import { SkillCard } from "../components/card";
import { Para } from "../components/para";
import { Assests } from "../Assests/Images";
import { Ball } from "../components/techBall";

export const AboutPage = () => {
  return (
    <>
      <Box
        id="about"
        sx={{
          // height: "50vh",
          backgroundColor: "#f0f0f2",
          pb: 10,
        }}
      >
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                my: 3,
                fontFamily: "Acme",
                fontSize: 20,
                fontStyle: "italic",
              }}
            >
              Overview.
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Para>
              Greetings! I'm Akesh, a passionate software engineer with a zest
              for exploration. I proudly hold a Computer Science special degree
              from the esteemed University of Sri Jayewardenepura. My journey
              into the world of technology began with a fascination for solving
              complex puzzles, which eventually led me to the realm of software
              development.
            </Para>
          </Grid>
          <Grid item xs={5}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Para>
              Beyond the world of coding, I'm an avid traveler who seeks to
              uncover the beauty and diversity our world has to offer. Exploring
              new places, experiencing different cultures, and connecting with
              people from all walks of life enriches my perspective and fuels my
              creativity.
            </Para>
          </Grid>
          <Grid item xs={5}></Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <SkillCard title1="Frontend" title2="Developer" duration={1}>
              <CodeIcon sx={{ fontSize: 50, color: "white" }}></CodeIcon>
            </SkillCard>
          </Grid>
          <Grid item xs={3}>
            <SkillCard title1="Backend" title2="Developer" duration={2}>
              <DataObjectIcon
                sx={{ fontSize: 50, color: "white" }}
              ></DataObjectIcon>
            </SkillCard>
          </Grid>
          <Grid item xs={3}>
            <SkillCard title1="UI/UX" title2="Designer" duration={3}>
              <ArchitectureIcon
                sx={{ fontSize: 50, color: "white" }}
              ></ArchitectureIcon>
            </SkillCard>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: "50vh",
          backgroundImage: `url(${Assests.Tech.group_1})`,
        }}
      >
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                my: 3,
                fontFamily: "Acme",
                fontSize: 20,
                fontStyle: "italic",
              }}
            >
              Technologies
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_C} alt="c#"></img>
            </Ball>
          </Grid>

          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_html} alt="c#"></img>
            </Ball>
          </Grid>

          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_js} alt="c#"></img>
            </Ball>
          </Grid>

          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_css} alt="c#"></img>
            </Ball>
          </Grid>

          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_react} alt="c#"></img>
            </Ball>
          </Grid>

          <Grid item>
            <Ball>
              <img src={Assests.Technologies.group_git} alt="c#"></img>
            </Ball>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </>
  );
};
