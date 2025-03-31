import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";

const ContactButton = () => {
  return (
    <Box sx={{ marginRight: "10vw" }}>
      <a href="/contact" target="_blank" style={{ textDecoration: "none" }}>
        <Button>Contact</Button>
      </a>
    </Box>
  );
};

export default ContactButton;
