import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Languages = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        justifyItems: "center",
        marginLeft: "10rem",
        marginRight: "8rem",
      }}
    >
      <Typography>HTML</Typography>
      <Typography>Javascript</Typography>
      <Typography>Typescript</Typography>
      <Typography>React</Typography>
      <Typography>Redux</Typography>
      <Typography>API</Typography>
      <Typography>NODE.JS</Typography>
      <Typography>GITHUB</Typography>
      <Typography>VERCEL</Typography>
      <Typography>Material UI</Typography>
      <Typography>CSS</Typography>
      <Typography>SASS</Typography>
    </Box>
  );
};

export default Languages;
