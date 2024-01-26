import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const DrawerComp = ({ drawerWidth, open, handleDrawerToggle }) => {
  const navItems = [
    "Browse Categories",
    "Home",
    "Catalog",
    "Bog",
    "Pages",
    "About Us",
    "Sign In",
    "Wishlist",
    "Cart",
  ];

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
      }}
    >
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center", width: { drawerWidth } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
                <Divider />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComp;
