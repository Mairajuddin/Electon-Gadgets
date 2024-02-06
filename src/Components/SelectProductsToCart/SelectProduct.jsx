import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";

const SelectProduct = () => {
  const [color, setColor] = useState([]);

  const handleSetColor = (e) => {
    console.log(e, "indexxxxxxxxxxxx");
  };
  return (
    <Container>
      <Box my={2}>
        <Grid container>
          <Grid items xs={12} md={6}>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: { md: "417px", lg: "547px" },
                  height: { md: "441px", lg: "461px" },
                }}
              >
                <img
                  src="./6456332_sd 1.png"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: { md: "407px", lg: "537px" },
                  display: "flex",
                  gap: 2,
                  p: 2,
                }}
              >
                <img
                  src="./Frame 32.png"
                  style={{
                    width: "50%",
                    border: "1px solid gray",
                    borderRadius: "10px",
                  }}
                />
                <img
                  src="./Frame 32.png"
                  style={{
                    width: "50%",
                    border: "1px solid gray",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid items xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                // border: "1px solid green",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#003F62",
                  fontWeight: "bold",
                  lineHeight: "60px", //will remove during responsiveness
                }}
              >
                Play Game
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#4A4A4A",
                  fontWeight: "bold",
                }}
              >
                $11,345.00
              </Typography>
              <Box
                my={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <img
                    src="./star.png"
                    key={index}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginInline: "2px",
                    }}
                  />
                ))}
                no reviews
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <span
                  style={{
                    fontFamily: "sans-serif",
                    color: "#4A4A4A",
                    fontWeight: 600,
                  }}
                >
                  Availability {"   "}:
                </span>
                <img
                  src="./VectorCheck.png"
                  style={{ width: "25px", height: "15px" }}
                />
                <span
                  style={{
                    fontFamily: "sans-serif",
                    color: "green",
                    fontWeight: 600,
                  }}
                >
                  in stock
                </span>
              </Box>
              <Typography
                paragraph
                sx={{ fontFamily: "sans-serif", color: "#4A4A4A" }}
              >
                Hurry up ! only 34 product left in stock !
              </Typography>
              <Divider sx={{ my: 2 }} variant="middle" />
              <Box display="flex" gap={2}>
                {[1, 2].map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => handleSetColor(index)}
                    sx={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#D0EC48",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SelectProduct;
