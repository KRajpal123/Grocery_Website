import React from "react";
import PrimaryButton from "../../../buttons/PrimaryButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <PrimaryButton>
        <ArrowBackIosIcon />
      </PrimaryButton>
    </div>
  );
};

export default CustomPrevArrow;
