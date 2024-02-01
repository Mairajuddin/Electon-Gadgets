import { Box, Input, Typography } from "@mui/material";

const NewsLetter = () => {
  return (
    <Box
      width={"100%"}
      p={5}
      mb={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E2F4FF",
      }}
    >
      <Box
        width={"100%"}
        p={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: "12px",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#ffff",
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography>Subscribe newsletter</Typography>
        <Box
          sx={{
            display: "flex",

            height: 40,
            width: { xs: "200px", md: "300px" },

            p: 2,

            backgroundColor: "#EDA415",
            borderRadius: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            name="email"
            placeholder="enter email"
            disableUnderline={true}
            sx={{ p: 3, fontSize: "12px", fontWeight: 600, color: "#ffff" }}
          />
          <img
            src="./send-2.svg"
            alt="mail"
            style={{ width: "20px", height: "20px" }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }} gap={2}>
          <img
            src="./headphone.png"
            alt="mail"
            style={{ width: "40px", height: "40px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body3" sx={{ lineHeight: 1.5 }}>
              call us 24/7
            </Typography>
            <p style={{ fontSize: "14px" }}>(+62) 0123 567 789</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
