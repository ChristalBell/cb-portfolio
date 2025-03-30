import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Christal Bell
        </Typography>
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
