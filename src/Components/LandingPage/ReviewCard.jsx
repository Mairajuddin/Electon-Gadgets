import { Box, Grid, Typography } from "@mui/material";

const ReviewCard = ({ data }) => {
  return (
    <Box display={"flex"} sx={{ gap: 2 }}>
      <Grid container>
        {data.map((item) => (
          <Grid items key={item.id} xs={12} sm={6} lg={4}>
            <Box
              p={2}
              sx={{
                mt: 2,
                display: "flex",
                width: { xs: "100%", sm: "340px", md: "452px", lg: "372px" },
                borderRadius: "8px",
                boxShadow: "2px 2px 2px 2px rgba(0.25, 0.25, 0.25, 0.25)",
                border: "1px solid #B6B6B6",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box
                  p={0.5}
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <img
                    src={item.url}
                    alt=""
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px dashed #EDA415",
                      borderRadius: "50%",
                      borderWidth: "3px",
                      padding: "2px",
                    }}
                  />
                  <Typography
                    variant="body3"
                    sx={{
                      fontWeight: 600,
                      color: "#003F62",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
                <Box
                  p={2}
                  sx={{ backgroundColor: "#E2F4FF", borderRadius: "8px" }}
                >
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      textAlign: "justify",
                      color: "#003F62",
                      padding: "2px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                    faucibus bibendum ullamcorper. Phasellus tristique aenean at
                    lorem sed scelerisque.
                  </p>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewCard;
