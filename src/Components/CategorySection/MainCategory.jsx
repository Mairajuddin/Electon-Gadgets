import { Box } from "@mui/material";
import CategorySidebar from "./CategorySidebar";

const MainCategory = () => {
  return (
    <Box mt={3} width={"100%"} sx={{ display: "flex" }}>
      <CategorySidebar />
      <Box sx={{ width: "calc(100% - 280px)", border: "1px solid blue " }}>
        world
      </Box>
    </Box>
  );
};

export default MainCategory;
