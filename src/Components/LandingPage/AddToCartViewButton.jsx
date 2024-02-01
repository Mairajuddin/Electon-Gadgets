import { Box } from "@mui/material";

const AddToCartViewButton = () => {
  return (
    <Box
      mt={3}
      sx={{ display: "flex", justifyContent: "space-evenly", gap: 1 }}
    >
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#87BCD9",
          borderRadius: "20px",
          gap: 4,
        }}
      >
        <p
          style={{
            fontWeight: 550,
            fontFamily: "sans-serif",
            marginLeft: "13px",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Add to Cart
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "22px",
            width: "22px",
            backgroundColor: "#EDA415",
            borderRadius: "50%",
          }}
        >
          <img
            src="./shopping-cart.svg"
            style={{
              height: "15px",
              width: "15px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#87BCD9",
          borderRadius: "20px",
        }}
      >
        <img
          src="./eye.svg"
          style={{
            margin: "10px",
            height: "20px",
            width: "20px",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default AddToCartViewButton;
