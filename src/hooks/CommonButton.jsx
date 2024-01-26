import { Button, Typography } from "@mui/material";

const CommonButton = ({ data }) => {
  return (
    <Button
      variant="contained"
      size="small"
      disableElevation
      sx={{ borderRadius: "25px", backgroundColor: "#EDA415" }}
    >
      <Typography p={1} variant="body3">
        {" "}
        {data}
      </Typography>
    </Button>
  );
};

export default CommonButton;
