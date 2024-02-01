import { Box, Container, Grid, Typography } from "@mui/material";
import AddToCartViewButton from "./AddToCartViewButton";

const QuickSelection = () => {
  const imageSrc = "./Vector.svg";
  const imageCount = 5;
  const imageArray = Array.from({ length: imageCount });
  const SpeakerSpecs = [57, 11, 33, 59];
  const CardData = [
    {
      id: 1,
      title: "Game Controller",
      Price: "$ 11, 70",
      url: "./Frame 29 (4) (1).png",
    },
    {
      id: 2,
      title: "Laptop",
      Price: "$ 11, 70",
      url: "./Frame 29 (5) (1).png",
    },
  ];

  return (
    <Container>
      <Box mt={10} mb={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "100%",
            gap: { xs: 2, md: 5 },
          }}
        >
          <Box
            sx={{
              // display: { xs: "none", lg: "flex" },
              display: "flex",
              justifyContent: "center",
              //   alignItems: "center",
              width: { xs: "100%", md: "50%", lg: "60%" },
              border: "1px solid #B6B6B6",
              borderRadius: "8px",
              boxShadow: "2px 2px 2px 2px rgba(0.25, 0.25, 0.25, 0.25)",
              p: 5,
            }}
          >
            <Grid container>
              <Grid items xs={12} lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="./11 1.2.png"
                    style={{ width: "245px", height: "145px" }}
                  />
                </Box>
              </Grid>
              <Grid items xs={12} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // border: "1px solid black",
                    height: "80%",
                    justifyContent: { xs: "center", lg: "space-evenly" },
                    mt: 5,
                    mr: 2,
                    // p: 3,
                  }}
                >
                  <span
                    style={{
                      color: "#1B5A7D",
                      fontWeight: 600,
                      fontFamily: "sans-serif",
                    }}
                  >
                    JBL bar 2.1 deep bass
                  </span>
                  <Typography sx={{ color: "#4A4A4A", fontWeight: 800 }}>
                    $ 11.45
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {imageArray.map((_, index) => (
                      <img
                        key={index}
                        src={imageSrc}
                        alt={`carousal-${index}`}
                      />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      mt: 2,
                    }}
                  >
                    {SpeakerSpecs.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          p: 2,
                          backgroundColor: "#E2F4FF",
                          width: { xs: "30px", md: "40px", lg: "60px" },
                          height: { xs: "30px", md: "40px", lg: "60px" },
                          mx: 1,
                          color: "#EDA415",
                          fontWeight: 600,
                          fontSize: "19px",
                          fontFamily: "sans-serif",
                          borderRadius: "50%",
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <AddToCartViewButton />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%", lg: "40%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {CardData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  height: "50%",
                  alignItems: "center",
                  border: "1px solid #B6B6B6",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 2px 2px rgba(0.25, 0.25, 0.25, 0.25)",
                  p: 3,
                }}
              >
                <img
                  src={item.url}
                  style={{ width: "150px", height: "90px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    gap: 2,
                    ml: 2,
                  }}
                >
                  <p
                    style={{
                      color: "#003F62",
                      fontWeight: 600,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.title}
                  </p>
                  <Typography sx={{ fontWeight: 800 }}>{item.Price}</Typography>
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    {imageArray.map((_, index) => (
                      <img
                        key={index}
                        src={imageSrc}
                        alt={`carousal-${index}`}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default QuickSelection;
