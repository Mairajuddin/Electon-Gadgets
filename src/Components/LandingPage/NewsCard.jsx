import { Box, Grid, Typography } from "@mui/material";
// import { newsData } from "../../Utils/NewsData";

const NewsCard = ({ data }) => {
  return (
    <Box display={"flex"} gap={2} sx={{ flexWrap: "wrap" }}>
      {data.map((item, index) => (
        <Box
          key={item.id}
          p={2}
          sx={{
            border: "1px solid #B6B6B6",
            width: { xs: "100%", sm: "48%" },
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={6}>
              <img
                src={item.url}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                  gap: 1,
                  p: 2,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  //   variant={"body2"}
                  sx={{
                    fontSize: "12px",
                    fontWeight: 600,
                    width: "fit-content",
                    color: "#1B5A7D",
                    p: 1,
                    border: "1px solid #B6B6B6",
                    borderRadius: 5,
                  }}
                >
                  {" "}
                  2,oct,2024
                </Typography>
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    color: "#1B5A7D",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    color: "#1B5A7D",
                  }}
                >
                  {item.para}
                </p>
                <h6
                  style={{
                    marginTop: "20px",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    color: "#1B5A7D",
                    fontWeight: 300,
                  }}
                >
                  By spacing tech
                </h6>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default NewsCard;
