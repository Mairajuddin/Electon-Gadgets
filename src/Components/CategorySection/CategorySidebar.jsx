import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";

const CategorySidebar = () => {
  const [selectCategory, setSelectCategory] = useState([]);

  const handleGetCategory = (data) => {
    setSelectCategory((prev) => [...prev, data]);
    console.log(selectCategory);
  };

  const categoryData = [
    { id: 1, title: "All Categories", qty: 10 },
    { id: 2, title: "Tablet", qty: 5 },
    { id: 3, title: "Laptop", qty: 5 },
    { id: 4, title: "Headphones", qty: 5 },
    { id: 5, title: "Console", qty: 5 },
    { id: 6, title: "Others", qty: 5 },
  ];

  const colors = [
    "#EDA415",
    "#E42424",
    "#1B5A7D",
    "#ACACAC",
    "#1D5F23",
    "#2E56A3",
    "#8131A7",
    "#BC2944",
    "#9BC14C",
  ];
  const productSize = [
    { id: 1, title: "M", qty: 5 },
    { id: 2, title: "S", qty: 5 },
    { id: 3, title: "X", qty: 5 },
    { id: 4, title: "XX", qty: 5 },
  ];

  const availability = [
    { title: "In Stock", value: 4 },
    { title: "Out Stock", value: 0 },
  ];
  return (
    // <Box sx={{ border: "1px solid red" }}>
    <Box width={280} mx={1}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          category
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>reset</Typography>
      </Box>

      <Box mx={2} my={1}>
        <List disablePadding>
          {categoryData.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => handleGetCategory(item)}
            >
              {/* <ListItemIcon disablePadding> */}
              <img
                src="./Rectangle 3.png"
                alt=""
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              {/* </ListItemIcon> */}
              <Typography
                sx={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}
              >
                {item.title}
              </Typography>
              <ListItemText
                primary={item.qty}
                sx={{ textAlign: "right", mr: 1 }}
              />
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" sx={{ my: 2 }} />
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          Availability
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#003F62", fontWeight: 500 }}
          >
            0 selected
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>reset</Typography>
        </Box>
        <Box>
          <Box mx={2} my={1}>
            <List disablePadding>
              {availability.map((item) => (
                <ListItem
                  key={item.id}
                  disablePadding
                  onClick={() => handleGetCategory(item)}
                >
                  {/* <ListItemIcon disablePadding> */}
                  <img
                    src="./Rectangle 3.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  {/* </ListItemIcon> */}
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}
                  >
                    {item.title}
                  </Typography>
                  <ListItemText
                    primary={item.value}
                    sx={{ textAlign: "right", mr: 1 }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider variant="middle" sx={{ my: 2 }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          Product Type
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#003F62", fontWeight: 500 }}
          >
            0 selected
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>reset</Typography>
        </Box>
        <Box>
          <Box mx={2} my={1}>
            <List disablePadding>
              <ListItem disablePadding>
                {/* <ListItemIcon disablePadding> */}
                <img
                  src="./Rectangle 3.png"
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
                {/* </ListItemIcon> */}
                <Typography
                  sx={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}
                >
                  Smart Watch
                </Typography>
                <ListItemText primary="3" sx={{ textAlign: "right", mr: 1 }} />
              </ListItem>
            </List>
            <Divider variant="middle" sx={{ my: 2 }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          Brand
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#003F62", fontWeight: 500 }}
          >
            0 selected
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>reset</Typography>
        </Box>
        <Box>
          <Box mx={2} my={1}>
            <List disablePadding>
              <ListItem disablePadding>
                {/* <ListItemIcon disablePadding> */}
                <img
                  src="./Rectangle 3.png"
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
                {/* </ListItemIcon> */}
                <Typography
                  sx={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}
                >
                  Smart Watch
                </Typography>
                <ListItemText primary="3" sx={{ textAlign: "right", mr: 1 }} />
              </ListItem>
            </List>
            <Divider variant="middle" sx={{ my: 2 }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          Color
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#003F62", fontWeight: 500 }}
          >
            0 selected
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>reset</Typography>
        </Box>
        {colors.map((item, index) => (
          <Box
            display={"inline-flex"}
            key={index}
            my={2}
            sx={{
              mx: 0.5,
              height: "15px",
              width: "15px",
              backgroundColor: item,
              borderRadius: "50%",
              border: "1px solid black",
            }}
          />
        ))}
        <Divider variant="middle" sx={{ my: 2 }} />
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "18px", color: "#003F62", fontWeight: 800 }}
        >
          Product Type
        </Typography>
        <Box
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", color: "#003F62", fontWeight: 500 }}
          >
            0 selected
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>reset</Typography>
        </Box>
        <Box>
          <Box mx={2} my={1}>
            <List disablePadding>
              {productSize.map((item) => (
                <ListItem key={item.id} disablePadding>
                  {/* <ListItemIcon disablePadding> */}
                  <img
                    src="./Rectangle 3.png"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "10px",
                    }}
                  />
                  {/* </ListItemIcon> */}
                  <Typography
                    sx={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}
                  >
                    {item.title}
                  </Typography>
                  <ListItemText
                    primary={item.qty}
                    sx={{ textAlign: "right", mr: 1 }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider variant="middle" sx={{ my: 2 }} />
          </Box>
        </Box>
      </Box>
    </Box>
    // </Box>
  );
};

export default CategorySidebar;
