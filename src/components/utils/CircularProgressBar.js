import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const CircularProgressBar = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
      {...props}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{ fontSize: "1rem" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
