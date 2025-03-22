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
        <a style={{ paddingRight: "1.5rem" }}>github</a>
        <a style={{ paddingRight: "1.5rem" }}>vercel</a>
        <a style={{ paddingRight: "1.5rem" }}>LinkedIn</a>
      </Box>
    </Box>
  );
};

export default Header;
