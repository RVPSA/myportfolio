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
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              height: {
                xs: "45vh",
                sm: "100vh",
              },
              // position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                // position: "absolute",
                // top: "40%",
                // left: "30%",
                fontFamily: "Source Code Pro",
                fontSize: 20,
              }}
            >
              HI, I'M
            </Typography>
            <Typography
              sx={{
                // position: "absolute",
                // top: "45%",
                // left: "30%",
                fontSize: 45,
                fontFamily: "Cinzel Decorative",
              }}
            >
              AKESH
            </Typography>
            <Typography
              sx={{
                // position: "absolute",
                // top: {
                //   xs: "60%",
                //   sm: "56%",
                // },
                // left: "30%",
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
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              border: "1px",
              borderRadius: "100% 0% 0% 100% / 100% 30% 70% 0% ",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              height: { xs: "75vh", sm: "100vh" },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: {
                  xs: "5%",
                  sm: "10%",
                },
                left: {
                  xs: "10%",
                  sm: "40%",
                },
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
