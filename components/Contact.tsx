"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SendButton from "./SendButton";
import Footer from "./Footer";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const tablet = useMediaQuery("(min-width:900px)");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90vw",
          flexDirection: tablet ? "row" : "column",
        }}
      >
        <Box
          className="left"
          sx={{
            marginLeft: tablet ? "20rem" : "13rem",
            width: tablet ? "25vw" : "50vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: tablet ? "left" : "center",
          }}
        >
          <Typography variant="h1" sx={{ marginBottom: "2rem" }}>
            Contact
          </Typography>
          <Typography>
            Lets work together to build your customized project! Reach out to me
            so we can discuss how we can make your dream a reality. Please fill
            in the form, and Ill get back to you as soon as possible.
          </Typography>
        </Box>

        <Box
          className="right"
          sx={{
            width: tablet ? "30vw" : "80vw",
            marginLeft: tablet ? "20rem" : "8rem",
            marginTop: tablet ? "0" : "4rem",
          }}
        >
          <Box>
            <Typography sx={{ marginLeft: tablet ? "2rem" : "4rem" }}>
              {" "}
              Name{" "}
            </Typography>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                border: "none",
                width: "25rem",
                marginLeft: tablet ? "0" : "4rem",
              }}
            />
            <hr
              style={{
                width: tablet ? "30vw" : "65vw",
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            ></hr>
          </Box>

          <Box>
            <Typography sx={{ marginLeft: tablet ? "2rem" : "4rem" }}>
              Email
            </Typography>
            <input
              type="text"
              id="email"
              name="email"
              required
              style={{
                border: "none",
                width: "25rem",
                marginLeft: tablet ? "0" : "4rem",
              }}
            />
            <hr
              style={{
                width: tablet ? "30vw" : "65vw",
                marginTop: "1rem",
                marginBottom: "1.5rem",
              }}
            ></hr>
          </Box>

          <Box>
            <Typography
              sx={{
                paddingBottom: "1rem",
                marginLeft: tablet ? "2rem" : "4rem",
              }}
            >
              Message
            </Typography>
            <textarea
              id="message"
              name="message"
              required
              wrap="hard"
              style={{
                border: "none",
                width: "25rem",
                height: "10rem",
                resize: "none",
                marginLeft: tablet ? "0" : "4rem",
              }}
            />
            <hr
              style={{
                width: tablet ? "30vw" : "65vw",
                marginBottom: "1.5rem",
              }}
            ></hr>
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
