"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";
import ProjectButton from "./ProjectButton";
import CodeButton from "./CodeButton";
import ContactButton from "./ContactButton";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const Project = () => {
  const tablet = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: tablet ? "20rem" : "8rem",
        marginBottom: "4rem",
        marginTop: "4rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <Typography variant="h1"> Projects</Typography>
        <ContactButton />
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="ebank"
          ></Image>
          <Typography variant="h5">ebank </Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            HTML SCSS CSS JAVASCRIPT
          </Typography>
          <Box className="mobile">
            <Button href="https://ebank-six.vercel.app" target="_blank">
              {" "}
              View Project{" "}
            </Button>
            <Button
              href="https://github.com/ChristalBell/ebank.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="sneakers ecommerce"
          ></Image>
          <Typography variant="h5">sneakers ecommerce</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            TYPESCRIPT SCSS CSS JAVASCRIPT
          </Typography>
          <Box className="mobile">
            <Button href="https://sneakers-commerce-mocha.vercel.app">
              {" "}
              View Project{" "}
            </Button>

            <Button
              href="https://github.com/ChristalBell/sneakers-commerce.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="recipe"
          ></Image>
          <Typography variant="h5">recipe test</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            TYPESCRIPT
          </Typography>
          <Box className="mobile">
            <Button href="https://recipe-test-seven.vercel.app" target="_blank">
              View Project
            </Button>
            <Button
              href="https://github.com/ChristalBell/recipe-test.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="advice"
          ></Image>
          <Typography variant="h5">advice-generator</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            TYPESCRIPT JAVASCRIPT CSS
          </Typography>
          <Box className="mobile">
            <Button
              href="https://advice-generator-lovat-five.vercel.app"
              target="_blank"
            >
              View Project
            </Button>
            <Button
              href="https://github.com/ChristalBell/advice-generator.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="dictionary"
          ></Image>
          <Typography variant="h5">dictionary</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            TYPESCRIPT
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <Button
              href="https://github.com/ChristalBell/dictionary.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="bmi calculator"
          ></Image>
          <Typography variant="h5">bmi calculator</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            TYPESCRIPT
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <Button
              href=" https://github.com/ChristalBell/bmi-calculator.git"
              target="_blank"
            >
              {" "}
              View Code{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="rock paper scissor"
          ></Image>
          <Typography variant="h5">rock paper scissor</Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            language used
          </Typography>
          <Box className="mobile">
            <ProjectButton />
            <CodeButton />
          </Box>
        </Box>

        <Box>
          <Image
            src=""
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
            alt="coffee business"
          ></Image>
          <Typography variant="h5">coffee business </Typography>
          <Typography
            sx={{ fontSize: ".75rem", marginTop: "1rem", marginBottom: "1rem" }}
          >
            language used
          </Typography>
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
