import { Box, Grow, Typography } from "@mui/material";
import React from "react";

export const SkillCard = ({ children, title1, title2 }) => {
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
        }}
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
