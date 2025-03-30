import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
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
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Christal Bell
        </Typography>
      </Box>
      <Box>
        <a
          href="/projects"
          target="_blank"
          style={{ paddingRight: "5rem", textDecoration: "none" }}
        >
          Projects
        </a>
        <a href="/contact" target="_blank" style={{ textDecoration: "none" }}>
          Contact
        </a>
      </Box>
      <Box>
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
