import { useState } from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { productsRow } from "../../Utils/PopularProductsSectionData";
import PopularProductTwo from "./PopularProductTwo";

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
      {pageIndex === 0 ? (
        <Box
          mt={{ xs: 3, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {productsRow.map((item) => (
            <Card
              key={item.id}
              sx={{
                // mt: 6,
                height: "250px",
                width: "250px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #B6B6B6",
                borderRadius: "20px",
                cursor: "pointer",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                mx: 1,
              }}
            >
              <Box
                p={1}
                sx={{ display: "flex", justifyContent: "center", mt: 3 }}
              >
                <img
                  src={item.img}
                  alt="carousal"
                  style={{ height: "100px", width: "140px" }}
                />
              </Box>
              <Box>
                <p
                  //   variant="body2"
                  style={{
                    marginLeft: "15px",
                    fontFamily: "sans-serif",
                    color: "#1B5A7D",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </p>
                <Typography
                  ml={2.2}
                  mt={1}
                  variant="body2"
                  sx={{ fontWeight: 600 }}
                >
                  $ {item.price}
                </Typography>
                <Box sx={{ ml: 2 }}>
                  {imageArray.map((_, index) => (
                    <img
                      key={index}
                      src={imageSrc}
                      style={{
                        marginTop: "10px",
                        marginInline: "2px",
                      }}
                      alt={`carousal-${index}`}
                    />
                  ))}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      ) : (
        <PopularProductTwo />
      )}
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
