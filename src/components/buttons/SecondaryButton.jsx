import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
    backgroundColor: "#699403",
    padding:" 12px 18px",
    color: "white",
    "&:hover": {
        backgroundColor: "white",
        color: "black",
    },
});

const SecondaryButton = ({ children, onClick }) => {
    return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

export default SecondaryButton;
