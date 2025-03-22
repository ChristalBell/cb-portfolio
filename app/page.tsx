import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Project />
      <Contact />
    </Box>
  );
};

export default Home;
