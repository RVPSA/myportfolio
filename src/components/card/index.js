import { Box, Grow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

export const SkillCard = ({ children, title1, title2, duration }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, x: [-1500, 0] },
        { duration: duration, delay: 0.25, type: "spring" }
      );
      // console.log("IsinView value", isInView);
    }
  }, [isInView]);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#333333",
          borderRadius: 5,
          margin: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          boxShadow: "10px 10px 5px #858586",
          opacity: 0,
        }}
        ref={scope}
      >
        {children}
        <Typography sx={{ color: "white" }}>
          {title1}
          <br />
          {title2}
        </Typography>
      </Box>
    </Box>
  );
};
