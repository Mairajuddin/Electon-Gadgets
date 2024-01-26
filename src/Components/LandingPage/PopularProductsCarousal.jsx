import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  productsRow,
  productsRowTwo,
} from "../../Utils/PopularProductsSectionData";
import CardComp from "./CardComp";

const TopControlPanel = () => {
  const chipData = ["Cameras", "Laptops", "Tablets", "Mouses"];
  const [isHovered, setHovered] = useState(Array(chipData.length).fill(false));

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleChipHover = (index) => {
    const newHoveredChips = [...isHovered];
    newHoveredChips[index] = true;
    setHovered(newHoveredChips);
  };

  const handleChipLeave = (index) => {
    const newHoveredChips = [...isHovered];
    newHoveredChips[index] = false;
    setHovered(newHoveredChips);
  };
  return (
    <Box mt={8} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: "#1B5A7D",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          Popular Products
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Stack direction="row" spacing={{ sm: 0.5, md: 2 }}>
          {chipData.map((item, index) => (
            <Chip
              key={index}
              label={item}
              style={{
                color: isHovered[index] ? "#ffff" : "#1B5A7D",
                border: "1px solid #1B5A7D",
                fontSize: "12px",
                padding: "2px",
                fontWeight: 600,
                fontFamily: "sans-serif",
                backgroundColor: isHovered[index] ? "#1B5A7D" : "transparent",
              }}
              onMouseOver={() => handleChipHover(index)}
              onMouseOut={() => handleChipLeave(index)}
              variant="outlined"
              onClick={handleClick}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const PopularProductsCarousal = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const imageSrc = "./Vector.svg";
  const imageCount = 5;

  const imageArray = Array.from({ length: imageCount });
  const handleClickDot = (id) => {
    setPageIndex(id);
  };
  return (
    <Container>
      <TopControlPanel />
      <Box
        mt={{ xs: 3, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <CardComp
          data={
            pageIndex === 0
              ? productsRow
              : pageIndex === 1
              ? productsRowTwo
              : productsRow
          }
        />
      </Box>
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
    </Container>
  );
};

export default PopularProductsCarousal;
