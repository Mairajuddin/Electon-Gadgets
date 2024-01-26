import { Box, Typography } from "@mui/material";
import { LightTheme } from "../../Utils/Theme";

const TopBar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        height: 40,
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between  ",
          alignItems: "center",
          m: 2,
        }}
      >
        <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
          Need help Call us: <span>(+98)93846292</span>
        </Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ display: "flex" }}>
            <img
              src="./location.svg"
              style={{ width: "20px", height: "20px" }}
            />
            <Typography sx={{ ml: 1, fontSize: "13px" }}>Our Store</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <img src="./group.svg" style={{ width: "20px", height: "20px" }} />
            <Typography
              sx={{
                ml: 1,
                fontSize: "13px",
                color: "secondary.contrastText",
              }}
            >
              Track your Order
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
