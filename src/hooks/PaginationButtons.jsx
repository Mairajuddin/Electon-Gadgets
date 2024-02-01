import { Box } from "@mui/material";
import React from "react";

const PaginationButtons = ({ number, setPageIndex, pageIndex }) => {
  const numberArray = Array.from({ length: number }, (_, index) => index + 1);
  const handleClickDot = (id) => {
    // console.log("hello");
    setPageIndex(id);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        gap: 2,
      }}
    >
      {numberArray.map((item, index) => (
        <Box
          key={index}
          onClick={() => handleClickDot(index)}
          sx={{
            borderRadius: "50%",
            backgroundColor: index === pageIndex ? "#EDA415" : "#fffff",
            border: "1px solid gray",
            width: "20px",
            cursor: "pointer",
            height: "20px",
          }}
        />
      ))}
    </Box>
  );
};

export default PaginationButtons;
