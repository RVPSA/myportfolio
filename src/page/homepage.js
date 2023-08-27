import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Assests } from "../Assests/Images";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Traveler", "Designer"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${Assests.home.group_1})`,
        width: "100%",
        minHeight: "100vh",
      }}
      id="home"
    >
      <Grid container>
        <Grid item xs={4}>
          <Box
            sx={{
              height: "100vh",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "40%",
                left: "30%",
                fontFamily: "Source Code Pro",
                fontSize: 20,
              }}
            >
              HI, I'M
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "45%",
                left: "30%",
                fontSize: 45,
                fontFamily: "Cinzel Decorative",
              }}
            >
              AKESH
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                top: "56%",
                left: "30%",
                fontFamily: "Source Code Pro",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              I'M a {text}
              <span>
                <Cursor cursorStyle="<" />
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              border: "1px",
              borderRadius: "100% 0% 0% 100% / 100% 30% 70% 0% ",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              height: "100vh",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "40%",
                opacity: 1.0,
              }}
            >
              <img src={Assests.self.group_1} alt="self"></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
