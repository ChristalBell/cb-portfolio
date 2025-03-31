import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const ProjectButton = (goToProject: any) => {
  return (
    <Link target="_blank" href={goToProject}>
      View Project
    </Link>
  );
};

export default ProjectButton;
