import React from "react";

import { Box } from "@mui/material";

import { Container } from "@mui/system";

import { useTheme } from "@material-ui/core";

import Footer from "../common/footer/Footer.jsx";
import Title from "../common/title/Title.jsx";
import CardProject from "./CardProject.jsx";

import { projects } from "../../data/data.js";

function Projects() {
  const currentPath = window.location.pathname;
  const theme = useTheme();

  return (
    <>
      <Container sx={{ p: 0 }}>
        <Title title={"Project"} theme={theme} />
        <Box
          sx={{
            mb: 1,
            minHeight: "60vh",
            [theme.breakpoints.down("sm")]: {
              px: 0,
            },
          }}
        >
          <CardProject projects={projects} />
        </Box>
        {/* <Title title={"Project Ecole"} theme={theme} />
        <CardProject projects={schoolProject} /> */}
      </Container>
      {currentPath === "/projects" && <Footer />}
    </>
  );
}

export default Projects;
