"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "2rem",
        flexDirection: mobile ? "column" : "row",
        marginLeft: mobile ? "3rem" : "0",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Christal Bell
        </Typography>
      </Box>
      <Box sx={{ marginTop: mobile ? "2rem" : "0" }}>
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
        <a
          href=""
          target="_blank"
          style={{ paddingRight: "1.5rem", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </Box>
    </Box>
  );
};

export default Header;
