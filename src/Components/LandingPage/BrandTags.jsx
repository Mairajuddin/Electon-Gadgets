import { Box, Container } from "@mui/material";

const BrandTags = () => {
  const brandTags = [
    "./brand-4.png",
    "./brand-5.png",
    "./brand-6.png",
    "./brand-7.png",
    "./brand-8.png",
  ];
  return (
    <Container>
      <Box
        mt={4}
        mb={2}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-around" },
          //   justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#E2F4FF",
          p: 4,
          gap: 4,
        }}
      >
        {brandTags.map((item, index) => (
          //   <Box key={index}>
          <img
            key={index}
            src={item}
            alt="brand-tags"
            style={{ width: "150px" }}
          />
          //   </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BrandTags;
