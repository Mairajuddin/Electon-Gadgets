import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CommonButton from "../../hooks/CommonButton";

const IMG = styled("img")({
  width: "1200",

  "@media (min-width: 400px) and (max-width: 550px) ": {
    width: "300px",
  },
  "@media (min-width: 551px) and  (max-width: 900px)": {
    width: "400px",
    height: "200px",
  },

  "@media(min-width: 900px)": {
    width: "100%",
  },

  "@media (min-width: 1200px)": {
    width: "1150px",
  },
});

const SalesBanner = () => {
  return (
    <Container>
      <Box mt={5} mb={2} sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "relative",
          }}
        >
          <IMG src="./pexels-nao-triponez-129208 1.png" alt="banner" />
        </Box>
        {/* <Box sx={{ position: "absolute" }}>
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              top: 1520,
              right: 220,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CommonButton data="New laptop" />
              <Typography
                variant="h4"
                mt={3}
                mb={3}
                sx={{ color: "#2E8FC5", fontWeight: 800 }}
              >
                Sales upto 50% off
              </Typography>
              <Typography
                variant="body3"
                sx={{ color: "#fff", fontWeight: 800 }}
              >
                12 inche hd display{" "}
              </Typography>
              <CommonButton data="Shop Now" />
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Container>
  );
};

export default SalesBanner;
