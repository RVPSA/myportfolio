import { Typography } from "@mui/material";
import React from "react";

export const Para = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: "Montserrat Alternates",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
};
