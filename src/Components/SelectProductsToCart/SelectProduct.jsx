import { useState } from "react";
import CardComp from "../LandingPage/CardComp";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const SelectProduct = () => {
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(0);
  const colors = ["#D0EC48", "#565656"];

  const productSize = [30, 56, 42, 48];

  const handleSetColor = (data) => {
    setColor(data);
    console.log(data);
  };
  const handleSize = (data) => {
    setSize(data);
  };
  const handleCountDecrese = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const RelatedCard = [
    {
      id: "1",
      img: "./camera 1.png",
      title: "Camera",
      price: "31, 70",
    },
    {
      id: "2",
      img: "./Frame 29.png",
      title: "Headphones",
      price: "21, 70",
    },
    {
      id: "3",
      img: "./Frame 30.png",
      title: "Laptop",
      price: "11, 70",
    },
    {
      id: "4",
      img: "./Frame 31.png",
      title: "Gaming Headphone",
      price: "21, 70",
    },
  ];

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
                gap: 0.8,
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
              <Divider sx={{ my: 1 }} variant="middle" />
              <Box display="flex" gap={2} sx={{ alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    color: "#4A4A4A",
                    fontWeight: 700,
                  }}
                >
                  Color {"   "}:
                </span>
                {colors.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: index === color ? "2px solid red" : "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      p: 0.3,
                    }}
                  >
                    <Box
                      onClick={() => handleSetColor(index)}
                      sx={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        // border: index === color ? "1.3px solid red" : "none",
                        p: 1,
                        backgroundColor: item,
                        boxSizing: "border-box",
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <Box mt={1} display="flex" gap={2} sx={{ alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    color: "#4A4A4A",
                    fontWeight: 700,
                  }}
                >
                  Size {"    "}:
                </span>
                {productSize.map((item, index) => (
                  <Box
                    key={"index"}
                    sx={{
                      backgroundColor: "#EEEEEE",
                      p: 1.5,
                      border: size === index ? "1px solid black" : null,
                      cursor: "pointer",
                    }}
                    onClick={() => handleSize(index)}
                  >
                    <span
                      style={{ fontSize: "20px", fontFamily: "sans-serif" }}
                    >
                      {item}
                    </span>
                  </Box>
                ))}
              </Box>
              <Box
                mt={1.9}
                display="flex"
                gap={2}
                sx={{ alignItems: "center" }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    color: "#4A4A4A",
                  }}
                >
                  Quantity{"  "}:
                </span>
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "#EEEEEE",

                    fontSize: "30px",
                    alignItems: "center",
                    fontWeight: 700,
                    justifyContent: "center",
                  }}
                >
                  <span
                    onClick={handleCountDecrese}
                    style={{
                      fontSize: "20px",
                      padding: "8px",
                      border: "1px solid black",
                      cursor: "pointer",
                      fontWeight: "bolder !important",
                    }}
                  >
                    -
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      padding: "8px",
                      paddingInline: "40px",
                      border: "1px solid black",
                      cursor: "pointer",
                    }}
                  >
                    {count}
                  </span>
                  <span
                    onClick={() => setCount(count + 1)}
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                      padding: "8px",
                      border: "1px solid black",
                    }}
                  >
                    +
                  </span>
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                gap={2}
                // p={1}
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: "30px",
                    fontWeight: 800,
                    backgroundColor: "#EDA415",
                  }}
                >
                  <span>Add to Cart</span>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontWeight: 800,
                    borderRadius: "30px",
                    backgroundColor: "#EDA415",
                  }}
                  size="large"
                >
                  {" "}
                  <span>Buy it Now</span>
                </Button>
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    p: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#EEEEEE",
                  }}
                >
                  <img
                    src="./VectorHeart.png"
                    alt="hert"
                    style={{
                      width: "15px",
                      height: "15px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} variant="middle" />
              <Box display="flex" gap={2} sx={{ flexDirection: "column" }}>
                <Box display="flex" gap={2} sx={{ alignItems: "center" }}>
                  <span>SKU</span>
                  <Typography>8-89898098-99</Typography>
                </Box>
                <Box display="flex" gap={2}>
                  <span>Category</span>
                  <Box display={"flex"} gap={2}>
                    <Typography>20%{"  "}off</Typography>
                    <Typography>49%{"  "}off</Typography>
                    <Typography>Alex Remote</Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={2} sx={{ alignItems: "center" }}>
                  <span>Share</span>
                  <Box display={"flex"} gap={4}>
                    <FacebookIcon
                      sx={{ color: "#232323", height: "25px", width: "25px" }}
                    />
                    <GoogleIcon
                      sx={{ color: "#232323", height: "25px", width: "25px" }}
                    />
                    <InstagramIcon
                      sx={{ color: "#232323", height: "25px", width: "25px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          width="100%"
          mt={3}
          sx={{
            gap: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            sx={{
              // border: "1px solid black",
              borderRadius: "15px",
              px: 5,
              textTransform: "none",
            }}
          >
            Description
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: "15px", px: 5, textTransform: "none" }}
          >
            Reviews
          </Button>
        </Box>
        <Box
          width="100%"
          p={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 3,
            border: "1px solid #B8B8B8",
            borderRadius: "15px",
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#003F62", fontWeight: 700, pb: 1 }}
          >
            Customer Reviews
          </Typography>
          <Typography>Not reviews yet</Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "180px", borderRadius: 0 }}
          >
            write a review
          </Button>
        </Box>
        <Box mt={5}>
          <Typography variant="h5" sx={{ color: "#003F62", fontWeight: 700 }}>
            Related Products
          </Typography>
          <Box
            display="flex"
            mt={3}
            sx={{
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardComp data={RelatedCard} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SelectProduct;
