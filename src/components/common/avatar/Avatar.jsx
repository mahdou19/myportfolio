
import React from "react";

import { Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";

import avatar from "../../../assets/images/avatar1.png";

function MyAvatar() {
  const theme = useTheme();
  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{
          width: 45,
          height: 45,
          ml: 5,
          [theme.breakpoints.down("sm")]: {
            m: 0,
          },
        }}
      />
    </>
  );
}

export default MyAvatar;
