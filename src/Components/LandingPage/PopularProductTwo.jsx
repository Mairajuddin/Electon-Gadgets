import { Box, Card, Typography } from "@mui/material";
import { productsRowTwo } from "../../Utils/PopularProductsSectionData";

const PopularProductTwo = () => {
  const imageSrc = "./Vector.svg";
  const imageCount = 5;

  const imageArray = Array.from({ length: imageCount });
  return (
    <Box
      mt={{ xs: 3, md: 6 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {productsRowTwo.map((item) => (
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
          <Box p={1} sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <img
              src={item.img}
              alt="carousal"
              style={{ height: "100px", width: "140px" }}
            />
          </Box>
          <Box>
            <p
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
  );
};

export default PopularProductTwo;
