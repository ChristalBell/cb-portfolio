"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Languages from "./Languages";
import ContactButton from "./ContactButton";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = () => {
  const tablet = useMediaQuery("(min-width:900px)");
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
      <Box
        className="hero-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: mobile ? "center" : "space-between",
          marginLeft: mobile ? "1.5rem" : tablet ? "20rem" : "6rem",
          flexDirection: mobile ? "column-reverse" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            maxWidth: mobile ? "50vw" : "30vw",
            justifyContent: mobile ? "center" : "space-between",
          }}
        >
          <Typography variant="h1" sx={{ marginTop: ".5rem" }}>
            Hi! Im Christal{" "}
          </Typography>
          <Typography
            sx={{
              marginTop: "2rem",
              marginBottom: "4rem",
              textAlign: mobile ? "center" : "left",
            }}
          >
            Based in Los Angeles, I am a software engineer who is passionate
            about creating custom apps that showcase your personal brands.{" "}
          </Typography>
          <ContactButton />
        </Box>
        <Box
          sx={{
            width: "30vw",
            marginTop: mobile ? "2rem" : "0",
            marginBottom: mobile ? "2rem" : "0",
          }}
        >
          {" "}
          pic of me{" "}
        </Box>
      </Box>

      <hr
        style={{
          maxWidth: "80vw",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      ></hr>
      <Languages />
    </Box>
  );
};

export default Hero;
