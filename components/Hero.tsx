import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Languages from "./Languages";
import ContactButton from "./ContactButton";

const Hero = () => {
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Box
        className="hero-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "20rem",
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
          <Typography variant="h1" sx={{ marginTop: ".5rem" }}>
            Hi! Im Christal{" "}
          </Typography>
          <Typography>
            Based in Los Angeles, I am a software engineer who is passionate
            about creating custom apps that showcase your personal brands.{" "}
          </Typography>
          <ContactButton />
        </Box>
        <Box sx={{ width: "30vw" }}> pic of me </Box>
      </Box>

      <hr style={{ maxWidth: "80vw" }}></hr>
      <Languages />
    </Box>
  );
};

export default Hero;
