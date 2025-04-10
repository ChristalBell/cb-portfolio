"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
const Footer = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: mobile ? "15px" : "20px",
            fontWeight: "bold",
            margin: mobile ? "0 1rem" : "0 0",
          }}
        >
          Christal Bell
        </Typography>
      </Box>
      <Box sx={{ fontSize: mobile ? "12px" : "16px" }}>
        <a
          href="/projects"
          target="_blank"
          style={{
            paddingRight: "5rem",
            textDecoration: "none",
          }}
        >
          Projects
        </a>
        <a
          href="/contact"
          target="_blank"
          style={{
            textDecoration: "none",
            marginLeft: mobile ? "-4rem" : "0",
            marginRight: mobile ? "1rem" : "0",
          }}
        >
          Contact
        </a>
      </Box>
      <Box sx={{ fontSize: mobile ? "12px" : "16px" }}>
        <a
          href="https://github.com/ChristalBell"
          target="_blank"
          style={{ paddingRight: "1.5rem", textDecoration: "none" }}
        >
          github
        </a>
        <a
          href="https://vercel.com/christals-projects"
          target="_blank"
          style={{ paddingRight: "1.5rem", textDecoration: "none" }}
        >
          vercel
        </a>
        <a style={{ paddingRight: "1.5rem" }}>LinkedIn</a>
      </Box>
    </Box>
  );
};

export default Footer;
