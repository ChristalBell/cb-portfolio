import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1"> Projects</Typography>
        <Button>Contact Me</Button>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr 2fr)" }}>
        <Image src="" alt="pic"></Image>
        <Typography>ebank</Typography>

        <Image src="" alt="pic"></Image>
        <Typography>sneakers ecommerce</Typography>

        <Image src="" alt="pic"></Image>
        <Typography>recipe test </Typography>

        <Image src="" alt="pic"></Image>
        <Typography>advice-generator </Typography>

        <Image src="" alt="pic"></Image>
        <Typography>dictionary</Typography>

        <Image src="" alt="pic"></Image>
        <Typography>bmi calculator</Typography>

        <Image src="" alt="pic"></Image>
        <Typography>rock paper scissor</Typography>

        <Image src="" alt="pic"></Image>
        <Typography>coffee business </Typography>
      </Box>
    </Box>
  );
};

export default Project;
