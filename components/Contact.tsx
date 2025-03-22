import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Header from "./Header";

const Contact = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box className="left" sx={{ width: "30vw" }}>
          <Typography variant="h1">Contact</Typography>
          <Typography>
            I would love to hear about your project and how I could help. Please
            fill in the form, and Ill get back to you as soon as possible.
          </Typography>
        </Box>

        <Box>
          <Box>
            <Typography> Name </Typography>
            <hr style={{ width: "30vw" }}></hr>
          </Box>

          <Box>
            <Typography>Email</Typography>
            <hr style={{ width: "30vw" }}></hr>
          </Box>

          <Box>
            <Typography>Message</Typography>
            <hr style={{ width: "30vw" }}></hr>
          </Box>

          <Button>Send Message</Button>
        </Box>
      </Box>
      <hr style={{ width: "80vw" }}></hr>
      <Header />
    </Box>
  );
};

export default Contact;
