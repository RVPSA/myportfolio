import React, { useEffect } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Para } from "../para";
import { useAnimate, useInView } from "framer-motion";

//titleL = Left hand side title
//titleR = Right hand side title
//bdivider = bottom divider
//lStyle = weather apply style left hand side or not
export const Stage = ({
  titleL,
  titleR,
  bdivder = true,
  lStyle = true,
  duration,
}) => {
  const [scope, animate] = useAnimate();
  const [scope1, animate1] = useAnimate();
  const [scopeA, animateA] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, x: [-1500, 0] },
        { duration: duration, delay: 0.25, type: "spring" }
      );
      animate1(
        scope1.current,
        { opacity: 1, x: [1500, 0] },
        { duration: duration, delay: 0.25, type: "spring" }
      );
      animateA(
        scopeA.current,
        { opacity: [0, 0.3, 0.5, 1] },
        { duration: duration, delay: 0.25 }
      );
    }
  }, [isInView]);

  return (
    <Grid container>
      <Grid item xs={5} ref={scope} sx={{ opacity: 0 }}>
        {lStyle ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "#eaeaec",
              mt: 4,
              pr: 2,
              height: 50,
              borderRadius: 10,
            }}
          >
            <Para>{titleL}</Para>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 4,
              pr: 2,
              height: 50,
            }}
          >
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: "bold",
                fontStyle: "italic",
                color: "white",
              }}
            >
              {titleL}
            </Typography>
          </Box>
        )}
      </Grid>

      <Grid item xs={1} ref={scopeA} sx={{ opacity: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 3,
              height: 38,
              backgroundColor: "#666666",
              borderRadius: 50,
            }}
          ></Box>
          <Avatar></Avatar>
          <>
            {bdivder && (
              <Box
                sx={{
                  width: 3,
                  height: 38,
                  backgroundColor: "#666666",
                  borderRadius: 50,
                }}
              ></Box>
            )}
          </>
        </Box>
      </Grid>

      <Grid item xs={5} ref={scope1}>
        {lStyle === false ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#eaeaec",
              mt: 4,
              pl: 2,
              height: 50,
              borderRadius: 10,
            }}
          >
            <Para>{titleR}</Para>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mt: 4,
              pr: 2,
              height: 50,
            }}
          >
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: "bold",
                fontStyle: "italic",
                color: "white",
              }}
            >
              {titleR}
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
