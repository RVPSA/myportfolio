import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAnimate, useInView, motion } from "framer-motion";

export const Ball = ({ children }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      {
        x: [0, 3.5, 0],
        y: [0, 4.5, 0],
        rotate: 1,
      },
      { repeat: "inifinite", duration: 1 }
    );
  }, []);

  return (
    <Box
      ref={scope}
      sx={{
        backgroundImage:
          "radial-gradient(rgba(240,240,242,1) 0%, rgba(85,85,85,1) 85%, rgba(53,53,53,1) 100%)",
        borderRadius: "50%",
        height: 125,
        width: 125,
        boxShadow: "10px 10px 5px #858586",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
      }}
    >
      {children}
    </Box>
  );
};
