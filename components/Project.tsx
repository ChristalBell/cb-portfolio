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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20rem",
        marginBottom: "2rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h1"> Projects</Typography>
        <ContactButton />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box>
          <Image src="" alt="ebank"></Image>
          <Typography variant="h5">ebank</Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="sneakers ecommerce"></Image>
          <Typography variant="h5">sneakers ecommerce</Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="recipe"></Image>
          <Typography variant="h5">recipe test </Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="advice"></Image>
          <Typography variant="h5">advice-generator </Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="dictionary"></Image>
          <Typography variant="h5">dictionary</Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="bmi calculator"></Image>
          <Typography variant="h5">bmi calculator</Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="rock paper scissor"></Image>
          <Typography variant="h5">rock paper scissor</Typography>
          <Typography>language used</Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="coffee business"></Image>
          <Typography variant="h5">coffee business </Typography>
          <Typography>language used</Typography>
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
