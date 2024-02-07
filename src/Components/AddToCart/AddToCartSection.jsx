import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { productRows } from "./orderData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AddToCartSection = () => {
  return (
    <Container>
      <Box my={2} width={"100%"}>
        <Grid container gap={1}>
          <Grid items xs={12} md={7}>
            <Box>
              <TableContainer component={Paper}>
                <Table
                  sx={{
                    minWidth: 350,
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "#E2F4FF",
                        fontWeight: 800,
                      }}
                    >
                      <TableCell
                        align="center"
                        width={50}
                        sx={{ fontWeight: 800 }}
                      >
                        Product
                      </TableCell>
                      <TableCell
                        width={200}
                        align="right"
                        sx={{ fontWeight: 800 }}
                      ></TableCell>
                      <TableCell
                        align="center"
                        width={100}
                        sx={{ fontWeight: 800 }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        width={150}
                        align="center"
                        sx={{ fontWeight: 800 }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        width={150}
                        align="center"
                        sx={{ fontWeight: 800 }}
                      >
                        Subtotal
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ overflowY: "scroll" }}>
                    {productRows.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          width={50}
                          //   sx={{ backgroundColor: "yellow" }}
                        >
                          <img
                            src={item.url}
                            style={{ height: "70px", width: "90px" }}
                          />
                        </TableCell>
                        <TableCell width={200}>
                          <Box sx={{ color: "#003F62" }}>
                            <Typography
                              sx={{ fontSize: "15px", fontWeight: 800 }}
                            >
                              {item.title}
                            </Typography>
                            <span
                              style={{
                                color: "#2F2F2F",
                                fontSize: "12px",
                                fontWeight: 800,
                              }}
                            >
                              color{"  "}:{"  "}
                              {item.color}
                            </span>
                            <Typography
                              sx={{
                                color: "#2F2F2F",
                                fontSize: "12px",
                                fontWeight: 800,
                              }}
                            >
                              size{"  "}:{"  "}
                              {item.size}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          width={100}
                          align="center"
                          //   sx={{ backgroundColor: "blue" }}
                        >
                          {" "}
                          {item.price}
                        </TableCell>
                        <TableCell
                          width={150}
                          align="center"
                          //   sx={{ backgroundColor: "lightgreen" }}
                        >
                          {item.qty}
                        </TableCell>
                        <TableCell
                          align="center"
                          width={150}
                          //   sx={{ backgroundColor: "purple" }}
                        >
                          {item.subtotal}
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              p: 0.5,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid gray",
                              borderRadius: "50px",
                            }}
                          >
                            <CloseIcon sx={{ height: "15px", width: "15px" }} />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          <Grid items xs={12} md={4}>
            <Box sx={{ border: "1px solid gray", borderRadius: "3px" }}>
              <Box
                sx={{
                  backgroundColor: "#E2F4FF",
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: 800 }}>Car Total</Typography>
              </Box>
              <Box p={3}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      fontWeight: 550,
                    }}
                  >
                    {" "}
                    Subtotal
                  </span>
                  <Typography sx={{ fontSize: "14px", fontWeight: 800 }}>
                    {" "}
                    ${"  "}11,87
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box
                  mt={2}
                  p={1.5}
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    border: "1px solid black",
                    borderRadius: "25px",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Enter Coupon code
                  </Typography>
                  <span
                    style={{
                      fontFamily: "sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: "blue",
                    }}
                  >
                    Apply
                  </span>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  mt={2}
                  p={1.5}
                  display="flex"
                  sx={{
                    justifyContent: "space-between",
                    border: "1px solid black",
                    borderRadius: "25px",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Enter Coupon code
                  </Typography>
                  <ExpandMoreIcon />
                </Box>
                <Box
                  mt={2}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "sans-serif",
                      fontWeight: 450,
                    }}
                  >
                    {" "}
                    Total Amount
                  </span>
                  <Typography sx={{ fontSize: "13px", fontWeight: 800 }}>
                    {" "}
                    ${"  "}11,87
                  </Typography>
                </Box>
                <Button
                  fullWidth
                  variant="contained"
                  size={"large"}
                  sx={{
                    mt: 2,
                    backgroundColor: "#EDA415",
                    borderRadius: "25px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      padding: "2px",
                      fontWeight: 800,
                      color: "#FFFF",
                    }}
                  >
                    Proceed to Checkout
                  </span>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddToCartSection;
