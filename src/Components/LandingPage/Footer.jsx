import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const lists = [
  {
    label: "Home",
    headings: [
      "Brownze arnold",
      "Chronograph blue",
      "Smart phones",
      "Automatic watch",
      "Hair straighteners",
    ],
  },
  {
    label: "Services",
    headings: [
      "About us",
      "Contact us",
      "Return policy",
      "Privacy policy",
      "Payment policy",
    ],
  },
  {
    label: "Help",
    headings: ["News", "Service", "Our policy", "Custmer care", "Faq’s"],
  },
];

const Footer = () => {
  const footerLine = "  64 st james boulevard hoswick ,<br/> ze2 7zj";

  return (
    <Box sx={{ bgcolor: "primary.light", py: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "left", md: "center" },
              pl: { xs: 6, md: 2 },
              gap: 2,
            }}
          >
            <img
              src="./logo-1 1.png"
              style={{ height: "40px", width: "130px" }}
              alt="logo"
            />
            <Typography dangerouslySetInnerHTML={{ __html: footerLine }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9} container>
          {lists.map((list, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <List sx={{ pl: { xs: 4, md: 0 } }}>
                  <ListItem
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#1B5A7D",
                    }}
                  >
                    {list.label}
                  </ListItem>
                  {list.headings.map((subList, subListIndex) => (
                    <ListItem
                      sx={{
                        color: "#1B5A7D",
                        fontSize: "13px",
                        fontWeight: 300,
                      }}
                      key={subListIndex}
                    >
                      <ListItemText primary={subList} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
