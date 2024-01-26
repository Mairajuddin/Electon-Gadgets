import { Box, Typography } from "@mui/material";
import { useState } from "react";

const AccessBar = () => {
  const NavData = ["Home", "Catalog", "Blog", "Pages", "About Us"];
  const [btnBackground, setBtnBackground] = useState(
    Array(NavData.length).fill(false)
  );
  const [singleBtn, setSingleBtn] = useState(false);

  const handleBtnBackground = (index) => {
    setSingleBtn(false);
    setBtnBackground((prev) =>
      prev.map((_, i) => (i === index ? !prev[i] : false))
    );
  };
  const handleSingleBtn = () => {
    setSingleBtn(!singleBtn);
    // setBtnBackground(false);
    setBtnBackground((prev) => prev.map((_, i) => (i === 0 ? prev[i] : false)));
  };

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F4F4",
      }}
    >
      <Box
        sx={{
          height: 50,
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <Box
          display="flex"
          gap={0}
          sx={{ height: 50, justifyContent: "center", alignItems: "center" }}
        >
          <Box
            onClick={handleSingleBtn}
            display="flex"
            // gap={0.5}
            sx={{
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              width: 160,
              backgroundColor: singleBtn ? "#EDA415" : null,
              color: singleBtn ? "white" : null,
            }}
          >
            <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>
              Browse Categories
            </Typography>
            <img
              src="./arrow-down.svg"
              style={{
                color: "white",
                width: "13px",
                height: "13px",
                marginTop: "8px",
              }}
            />
          </Box>
          <Box
            sx={{ display: "flex", height: 50, marginLeft: { xs: 1, md: 10 } }}
          >
            {NavData.map((data, index) => (
              <>
                <Box
                  onClick={() => handleBtnBackground(index)}
                  sx={{
                    key: index,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 80,
                    display: "flex",
                    gap: 0.5,
                    fontSize: "13px",
                    fontWeight: 500,
                    backgroundColor: btnBackground[index] ? "#EDA415" : null,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      color: btnBackground[index] ? "white" : "black",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    {data}
                  </Typography>
                  <img
                    src="./arrow-down.svg"
                    style={{
                      display:
                        index === 0 || index === 1 || index === 3
                          ? "block"
                          : "none",
                      width: "13px",
                      height: "13px",
                      marginTop: "8px",
                    }}
                  />
                </Box>
              </>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "13px",
              fontWeight: 800,
              color: "#003F62",
            }}
          >
            30 Days Free Return
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default AccessBar;
