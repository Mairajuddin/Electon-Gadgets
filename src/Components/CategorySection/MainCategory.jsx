import { Box, Container } from "@mui/material";
import CategorySidebar from "./CategorySidebar";
import { productsRow } from "../../Utils/PopularProductsSectionData";
import CardComp from "../LandingPage/CardComp";
const MainCategory = () => {
  const CardSize = [
    { xs: "220px", lg: "290px" },
    { xs: "250px", lg: "280px" },
  ];

  return (
    <Box mt={3} width={"100%"} sx={{ display: "flex" }}>
      <CategorySidebar />
      <Box
        sx={{
          width: { xs: "100%", md: "calc(100% - 280px)" },
        }}
      >
        <Box
          mt={{ xs: 3, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            my: 2,
          }}
        >
          <CardComp
            data={productsRow}
            cardMeasure={CardSize}
            // width={CardSize[0]}
            // height={CardSize[1]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainCategory;
