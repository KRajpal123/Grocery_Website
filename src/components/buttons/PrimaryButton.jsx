import { IconButton } from "@mui/material";
import React from "react";

const PrimaryButton = (props) => {
  return (
    <>
      <IconButton
        size="large"
        sx={{
          ":hover": { backgroundColor: "#a2da1c", color: "#fff" },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        {...props}
      >
        {props.children}
      </IconButton>
    </>
  );
};

export default PrimaryButton;
