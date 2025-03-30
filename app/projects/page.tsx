import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import React from "react";

const ProjectPage = () => {
  return (
    <div>
      <Header />
      <hr
        style={{ width: "80vw", marginTop: "2rem", marginBottom: "2rem" }}
      ></hr>
      <Project />
      <hr style={{ width: "80vw", marginBottom: "2rem" }}></hr>
      <Footer />
    </div>
  );
};

export default ProjectPage;
