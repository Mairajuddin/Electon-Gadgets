import { Box, Container, Grid, Typography } from "@mui/material";

const Benefits = () => {
  const benefitData = [
    {
      id: 1,
      title: "Free Delivery",
      message: "on order above $50,00",
      url: "./box-tick.svg",
    },
    {
      id: 2,
      title: "Best quality ",
      message: "best quality in low price",
      url: "./crown.svg",
    },
    {
      id: 2,
      title: "1 year warranty",
      message: "Avaliable warranty",
      url: "./shield-security.svg",
    },
  ];
  return (
    <Container>
      <Box
        mt={4}
        mb={2}
        p={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#E2F4FF",
          borderRadius: "10px",
        }}
      >
        <Grid container xs={12}>
          {benefitData.map((item) => (
            <Grid items xs={12} md={6} lg={4} key={item.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ height: "45px", width: "45px" }}>
                  <img src={item.url} alt="" style={{ width: "100%" }} />
                </Box>
                <Box
                  sx={{
                    ml: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                      fontWeight: 600,
                      color: "#003F62",
                      lineHeight: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    {item.title}
                  </p>
                  <Typography
                    paragraph
                    sx={{ fontWeight: 600, fontSize: "13px", color: "#003F62" }}
                  >
                    {item.message}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Benefits;
