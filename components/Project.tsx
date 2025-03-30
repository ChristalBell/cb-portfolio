import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Image from "next/image";
import ProjectButton from "./ProjectButton";
import CodeButton from "./CodeButton";
import Contact from "./Contact";
import ContactButton from "./ContactButton";

const Project = () => {
  // const projectLinks = [
  //   "ebank-six.vercel.app",
  //   "sneakers-commerce-mocha.vercel.app",
  //   "recipe-test-seven.vercel.app",
  //   "advice-generator-lovat-five.vercel.app",
  //   "dictionary",
  //   "bmi",
  //   "rock",
  //   "coffee",
  // ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20rem",
        marginBottom: "4rem",
        marginTop: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h1"> Projects</Typography>
        <ContactButton />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box>
          <Image src="" alt="ebank"></Image>
          <Typography variant="h5">ebank </Typography>
          <Typography sx={{ fontSize: ".75rem" }}>
            HTML SCSS CSS JAVASCRIPT
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="sneakers ecommerce"></Image>
          <Typography variant="h5">sneakers ecommerce</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>
            TYPESCRIPT SCSS CSS JAVASCRIPT
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="recipe"></Image>
          <Typography variant="h5">recipe test</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>TYPESCRIPT</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="advice"></Image>
          <Typography variant="h5">advice-generator</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>
            TYPESCRIPT JAVASCRIPT CSS
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="dictionary"></Image>
          <Typography variant="h5">dictionary</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>TYPESCRIPT</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="bmi calculator"></Image>
          <Typography variant="h5">bmi calculator</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>TYPESCRIPT</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="rock paper scissor"></Image>
          <Typography variant="h5">rock paper scissor</Typography>
          <Typography sx={{ fontSize: ".75rem" }}>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="coffee business"></Image>
          <Typography variant="h5">coffee business </Typography>
          <Typography sx={{ fontSize: ".75rem" }}>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
