"use client";
import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const SendButton = () => {
  const tablet = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        justifySelf: "right",
        marginRight: tablet ? "0" : "6rem",
        marginTop: "2rem",
      }}
    >
      <a href="mailto:christalvictoriabell@gmail.com">
        <Button>Send Message</Button>
      </a>
    </Box>
  );
};

export default SendButton;
