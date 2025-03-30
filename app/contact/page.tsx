import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <hr
        style={{ width: "80vw", marginBottom: "2rem", marginTop: "2rem" }}
      ></hr>
      <Contact />
    </div>
  );
};

export default page;
