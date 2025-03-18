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
      }}
    >
      <Typography>HTML</Typography>
      <Typography>Accessibility</Typography>
      <Typography>CSS</Typography>
      <Typography>SASS</Typography>
      <Typography>Material UI</Typography>
      <Typography>React</Typography>
      <Typography>Redux</Typography>
      <Typography>Javascript</Typography>
      <Typography>Typescript</Typography>
    </Box>
  );
};

export default Languages;
