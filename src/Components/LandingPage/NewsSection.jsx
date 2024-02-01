import { Box, Container, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import PaginationButtons from "../../hooks/PaginationButtons";
import { useEffect, useState } from "react";
import { newsData } from "../../Utils/NewsData";

const NewsSection = () => {
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    console.log(pageIndex);
  });

  return (
    <Container>
      <Box mt={8} mb={5}>
        <Box mb={5} sx={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ color: "#003F62", fontFamily: "sans-serif" }}>
            Latest News
          </h3>
          <h4
            style={{
              color: "#003F62",
              fontFamily: "sans-serif",
            }}
          >
            View all
          </h4>
        </Box>
        <Box width={"100%"}>
          <NewsCard
            data={
              pageIndex === 0
                ? newsData[0]
                : pageIndex === 1
                ? newsData[1]
                : pageIndex === 2
                ? newsData[2]
                : pageIndex === 3
                ? newsData[3]
                : pageIndex === 4
                ? newsData[4]
                : newsData[5]
            }
          />
        </Box>
        <Box>
          <PaginationButtons
            number={5}
            setPageIndex={setPageIndex}
            pageIndex={pageIndex}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default NewsSection;
