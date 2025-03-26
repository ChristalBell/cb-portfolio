import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Header from "./Header";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80vw" }}
      >
        <Box className="left" sx={{ width: "20vw", marginLeft: "15rem" }}>
          <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
            Contact
          </Typography>
          <Typography>
            I would love to hear about your project and how I could help. Please
            fill in the form, and Ill get back to you as soon as possible.
          </Typography>
        </Box>

        <Box className="right">
          <Box>
            <Typography sx={{ marginLeft: "2rem" }}> Name </Typography>
            <hr
              style={{
                width: "30vw",
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            ></hr>
          </Box>

          <Box>
            <Typography sx={{ marginLeft: "2rem" }}>Email</Typography>
            <hr
              style={{
                width: "30vw",
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            ></hr>
          </Box>

          <Box>
            <Typography sx={{ paddingBottom: "4rem", marginLeft: "2rem" }}>
              Message
            </Typography>
            <hr style={{ width: "30vw", marginBottom: "1.5rem" }}></hr>
          </Box>

          <Button sx={{ marginLeft: "25rem" }}>Send Message</Button>
        </Box>
      </Box>
      <hr
        style={{ width: "80vw", marginTop: "4rem", marginBottom: "4rem" }}
      ></hr>
      <Header />
    </Box>
  );
};

export default Contact;
