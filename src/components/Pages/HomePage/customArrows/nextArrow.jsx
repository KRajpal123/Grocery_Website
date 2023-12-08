import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PrimaryButton from '../../../buttons/PrimaryButton';
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
       <PrimaryButton>
        <ArrowForwardIosIcon/>
       </PrimaryButton>
    </div>
  );
};

export default CustomNextArrow;
