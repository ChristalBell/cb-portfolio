import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendButton from "./SendButton";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90vw" }}
      >
        <Box className="left" sx={{ marginLeft: "20rem", width: "25vw" }}>
          <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
            Contact
          </Typography>
          <Typography>
            Lets work together to build your customized project! Reach out to me
            so we can discuss how we can make your dream a reality. Please fill
            in the form, and Ill get back to you as soon as possible.
          </Typography>
        </Box>

        <Box className="right" sx={{ width: "30vw" }}>
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

          <SendButton />
        </Box>
      </Box>
      <hr
        style={{ width: "80vw", marginTop: "4rem", marginBottom: "4rem" }}
      ></hr>
      <Footer />
    </Box>
  );
};

export default Contact;
