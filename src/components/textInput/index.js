import { Box, FormControl, Input, TextField, Typography } from "@mui/material";
import React from "react";

export const TextInputField = ({ header, placeHolder }) => {
  return (
    <>
      <Typography sx={{ color: "white", mb: 2 }}>{header}</Typography>
      <Box sx={{ backgroundColor: "#666666", mb: 3 }}>
        <FormControl fullWidth>
          <TextField label={placeHolder}></TextField>
        </FormControl>
      </Box>
    </>
  );
};
