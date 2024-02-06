import {
  Box,
  Typography,
  Chip,
  Stack,
  Divider,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  categoryData,
  colors,
  productSize,
  availability,
} from "../../Utils/CategorySideBarData";
import "tippy.js/themes/light.css"; // Import the light theme CSS

const MenuData = ({ data }) => {
  return (
    <Box my={1}>
      <List>
        {data.map((item) => (
          <ListItem
            key={item.id}
            // disablePadding
            //   onClick={() => handleGetCategory(item)}
          >
            <img
              src="./Rectangle 3.png"
              alt=""
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#222222",
                fontFamily: "sans-serif",
              }}
            >
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const ResponsiveToolbar = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "fex", flexrapt: "wrap", cursor: "pointer" }}
        >
          <Tippy
            interactive
            placement="bottom"
            data-tippy-theme="white"
            theme="light"
            content={<MenuData data={categoryData} />}
          >
            <Chip
              label="Categories"
              size="large"
              avatar={
                <ArrowDownwardIcon style={{ height: "15px", width: "15px" }} />
              }
            />
          </Tippy>

          <Tippy
            interactive
            placement="bottom"
            theme="light"
            content={<MenuData data={productSize} />}
          >
            <Chip
              label="Size"
              size="large"
              avatar={
                <ArrowDownwardIcon style={{ height: "15px", width: "15px" }} />
              }
            />
          </Tippy>

          <Tippy
            placement="bottom"
            interactive
            data-tippy-theme="white"
            theme="light"
            content={<MenuData data={categoryData} />}
          >
            <Chip
              label="Color"
              size="large"
              avatar={
                <ArrowDownwardIcon style={{ height: "15px", width: "15px" }} />
              }
            />
          </Tippy>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResponsiveToolbar;
