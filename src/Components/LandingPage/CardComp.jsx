import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";

const CardComp = ({ data }) => {
  // const [isHover, setIsHover] = useState(false);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };
  const imageSrc = "./Vector.svg";
  const imageCount = 5;

  const imageArray = Array.from({ length: imageCount });
  return data.map((item) => (
    <Card
      onMouseEnter={() => handleHover(item.id)}
      onMouseLeave={handleLeave}
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      key={item.id}
      sx={{
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
      {hoveredCard !== item.id ? (
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
          <Typography ml={2.2} mt={1} variant="body2" sx={{ fontWeight: 600 }}>
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
      ) : (
        <Box mt={3} sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#87BCD9",
              borderRadius: "10px",
              gap: 4,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontFamily: "sans-serif",
                marginLeft: "13px",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              Add to Cart
            </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "22px",
                width: "22px",
                backgroundColor: "#EDA415",
                borderRadius: "50%",
              }}
            >
              <img
                src="./shopping-cart.svg"
                style={{
                  height: "15px",
                  width: "15px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#87BCD9",
              borderRadius: "10px",
            }}
          >
            <img
              src="./eye.svg"
              style={{
                margin: "10px",
                height: "20px",
                width: "20px",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      )}
    </Card>
  ));
};

export default CardComp;
