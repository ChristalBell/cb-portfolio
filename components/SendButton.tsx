import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";

const SendButton = () => {
  return (
    <Box sx={{ justifySelf: "right" }}>
      <a href="mailto:christalvictoriabell@gmail.com">
        <Button>Send Message</Button>
      </a>
    </Box>
  );
};

export default SendButton;
