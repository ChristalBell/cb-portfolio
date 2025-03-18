import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Languages from "./Languages";

const Hero = () => {
  return (
    <Box>
      <Box
        className="hero-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            maxWidth: "30vw",
          }}
        >
          <Typography variant="h1">Hi! Im Christal </Typography>
          <Typography>
            Based in Los Angeles, I am a software engineer who is passionate
            about creating custom apps that showcase your personal brands.{" "}
          </Typography>
          <Button>Contact Me</Button>
        </Box>
        <Box> pic of me </Box>
      </Box>

      <hr style={{ maxWidth: "80vw" }}></hr>
      <Languages />
    </Box>
  );
};

export default Hero;
