import { Box, Container } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { data, data2, data3 } from "../../Utils/ReviewCardData";
import { useState } from "react";

const Reviews = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const handleClickDot = (id) => {
    setPageIndex(id);
  };
  return (
    <Container>
      <Box mt={5} mb={2}>
        <ReviewCard
          data={pageIndex === 0 ? data : pageIndex === 1 ? data2 : data3}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            gap: 2,
          }}
        >
          {[1, 2, 3].map((item, index) => (
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
      </Box>
    </Container>
  );
};

export default Reviews;
