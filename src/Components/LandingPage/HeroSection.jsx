import { Box, Button, Grid, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      sx={{ marginTop: { xs: "71px", sm: "0px" } }}
    >
      <Grid container>
        <Grid items xs={12} md={6}>
          <Box
            sx={{
              p: 5,

              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 5,
            }}
          >
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#1B5A7D",
                fontSize: "40px",
                // lineHeight: "29px",
                fontWeight: "800",
              }}
            >
              Cannon
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                fontSize: "40px",
                color: "#1B5A7D",
                fontWeight: "800",
                marginLeft: 32,
              }}
            >
              camera
            </span>
            <Box
              sx={{
                pb: 5,
                justifyContent: "center",
                display: "flex",
                gap: 2,
                mt: 5,
                marginLeft: { xs: 8, md: 15 },
              }}
            >
              <Button
                variant={"contained"}
                size="large"
                sx={{ backgroundColor: "#EDA415", borderRadius: "15px" }}
              >
                <span>shop now</span>
              </Button>
              <Button
                size="large"
                sx={{ border: "1px solid #1B5A7D", borderRadius: "15px" }}
              >
                view more
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid items xs={12} md={6}>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              //   flexDirection: "column",
              alignItems: "center",
              mt: 1,
            }}
          >
            <img src="./8 1.png" alt="hero-img" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
