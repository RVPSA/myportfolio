import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { WorkExperience } from "./collection/workExperience";
import { Assests } from "../../Assests/Images";

import { ProjectCard } from "./collection/projectCard";

export const ProjectPage = () => {
  const width = window.innerWidth;
  return (
    <Box
      id="project"
      sx={{
        backgroundColor: "#141414",
        pb: {
          xs: 2,
          sm: 0,
        },
      }}
    >
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Acme",
              fontSize: 20,
              fontStyle: "italic",
              my: 3,
            }}
          >
            Projects
          </Typography>
        </Grid>

        {width < 600 ? (
          <>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <ProjectCard
                image={Assests.Projects.group_1}
                title="School Management System"
                description="This application can manage student and teachers, and also there are
          many features"
                fromL={true}
                duration={4}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <ProjectCard
                image={Assests.Projects.group_1}
                title="Real-time Subtitle Generator"
                description="This Application can generate real-time sinhala subtitle for sinhala speech using speech recognition"
                fromL={true}
                duration={6}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <ProjectCard
                image={Assests.Projects.group_1}
                fromL={false}
                duration={4}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={11}>
              <ProjectCard
                image={Assests.Projects.group_1}
                fromL={false}
                duration={6}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item sm={1}></Grid>
            <Grid item xs>
              <ProjectCard
                image={Assests.Projects.group_1}
                title="School Management System"
                description="This application can manage student and teachers, and also there are
          many features"
                fromL={true}
                duration={4}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                image={Assests.Projects.group_1}
                title="Real-time Subtitle Generator"
                description="This Application can generate real-time sinhala subtitle for sinhala speech using speech recognition"
                fromL={true}
                duration={6}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                image={Assests.Projects.group_1}
                fromL={false}
                duration={4}
              />
            </Grid>
            <Grid item xs>
              <ProjectCard
                image={Assests.Projects.group_1}
                fromL={false}
                duration={6}
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <WorkExperience />
        </Grid>
      </Grid>
    </Box>
  );
};
