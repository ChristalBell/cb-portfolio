import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Project from "@/components/projects/Project";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Project />
    </Box>
  );
};

export default Home;
