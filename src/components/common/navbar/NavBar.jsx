import React, { Fragment } from "react";

import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";

import { Stack } from "@mui/system";

import { makeStyles } from "@material-ui/core";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";

import { Link } from "react-router-dom";

import { Colors } from "../../../style/theme/index.jsx";
import NavBarMobile from "./NavbarMobile.jsx";
import MyAvatar from "../avatar/Avatar.jsx";

import { pages } from "../../../data/data.js";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <CssBaseline />
      <AppBar sx={{ bgcolor: Colors.green }}>
        <Toolbar>
          <MyAvatar />
          {matches ? (
            <>
              <NavBarMobile />
            </>
          ) : (
            <>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Stack spacing={2} direction="row">
                  {pages.map((page, index) => (
                    <Link to={page.path} className={classes.link}>
                      <Button variant="outlined" size="medium">
                        {page.title}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
