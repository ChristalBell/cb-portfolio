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
        <a style={{ paddingRight: "5rem" }}>Project</a>
        <a>Contact</a>
      </Box>
      <Box>
        <a style={{ paddingRight: "1.5rem" }}>github</a>
        <a style={{ paddingRight: "1.5rem" }}>vercel</a>
        <a style={{ paddingRight: "1.5rem" }}>LinkedIn</a>
      </Box>
    </Box>
  );
};

export default Footer;
