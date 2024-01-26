import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Button,
  Input,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComp from "./DrawerComp";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const drawerWidth = 160;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        elevation={trigger ? 5 : 0}
        sx={{ width: "100%", top: 0 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            height: 70,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 5 }}>
            <img
              src="./logo 1.png"
              style={{ height: "40px", width: "130px" }}
              alt="logo"
            />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                height: 40,
                width: { xs: "200px", md: "300px" },

                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Input
                name="email"
                placeholder="search any thing"
                disableUnderline={true}
                sx={{ p: 3, fontSize: "12px", fontWeight: 500 }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  right: -6,
                  justifyContent: "flex-end",
                  height: 44,
                  backgroundColor: "#EDA415",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "#F0B643",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "12px" },
                    fontWeight: 500,
                    p: { xs: 0.2, md: 0.5 },
                    textTransform: "none",
                    textAlign: "center",
                  }}
                >
                  Search
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { xs: 0.5, md: 2 },
            }}
          >
            <Box display="flex" gap={1}>
              <img src="./user.svg" style={{ height: "25px", width: "25px" }} />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                Sign in
              </Typography>
            </Box>
            <Box display="flex" gap={1} ml={2}>
              <img
                src="./heart.svg"
                style={{ height: "25px", width: "25px" }}
              />

              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                Wishlist
              </Typography>
            </Box>
            <Box display="flex" gap={1} ml={2}>
              <img
                src="./shopping-cart.svg"
                style={{ height: "25px", width: "25px" }}
              />

              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                Cart
              </Typography>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerComp
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
    </>
  );
};

export default NavBar;
