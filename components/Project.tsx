import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Image from "next/image";
import ProjectButton from "./ProjectButton";
import CodeButton from "./CodeButton";

const Project = () => {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1"> Projects</Typography>
        <Button>Contact Me</Button>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box>
          <Image src="" alt="ebank"></Image>
          <Typography>ebank</Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="sneakers ecommerce"></Image>
          <Typography>sneakers ecommerce</Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="recipe"></Image>
          <Typography>recipe test </Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="advice"></Image>
          <Typography>advice-generator </Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="dictionary"></Image>
          <Typography>dictionary</Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="bmi calculator"></Image>
          <Typography>bmi calculator</Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="rock paper scissor"></Image>
          <Typography>rock paper scissor</Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image src="" alt="coffee business"></Image>
          <Typography>coffee business </Typography>
          <Box>
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
