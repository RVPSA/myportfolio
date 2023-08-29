import { Box, Grid, Input, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { TextInputField } from "../components/textInput";
import { useAnimate, useInView } from "framer-motion";

export const ContactPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: [0, 1], x: [-800, 0] },
        { duration: 3, delay: 0.25, type: "spring" }
      );
    }
  }, [isInView]);

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#141414",
      }}
    >
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={7}>
          <Box
            ref={scope}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#292929",
              padding: 5,
              mt: 5,
              borderRadius: 5,
              // opacity: 0,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Acme",
                fontSize: 20,
                fontStyle: "italic",
                my: 2,
              }}
            >
              Contact.
            </Typography>
            <TextInputField
              header="Your Name"
              placeHolder="What is your name?"
            ></TextInputField>
            <TextInputField
              header="Your Email"
              placeHolder="What is your email?"
            ></TextInputField>
            <TextInputField
              header="Your Message"
              placeHolder="What is your message?"
            ></TextInputField>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
