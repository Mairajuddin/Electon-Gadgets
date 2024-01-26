import { Card, Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";

function Arrow(props) {
  const { className, onClick, right } = props;
  return (
    <div className={className} style={{ zIndex: 1 }} onClick={onClick}>
      <IconButton
        sx={{
          float: right ? "right" : "none",
          bgcolor: "#fff ",
          height: 50,
          width: 50,
          mr: right ? 2 : 0,
          ml: !right ? 2 : 0,
          boxShadow: "0 0 10px rgba(0,0,0,.1)",
          "&:hover": {
            bgcolor: "rgba(225,225,225,.9)",
          },
          color: "black",
        }}
      >
        {right ? (
          <img src="./arrow-right.svg" />
        ) : (
          <img src="./arrow-left.svg" />
        )}
      </IconButton>
    </div>
  );
}

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  // autoplay: true,
  nextArrow: <Arrow right={true} />,
  prevArrow: <Arrow right={false} />,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,

        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousal = () => {
  const data = [
    {
      id: 1,
      img: "./2 1.png",
      title: "Speaker",
      items: 6,
    },
    {
      id: 2,
      img: "./5 1.png",
      title: "Desktp & Laptop",
      items: 6,
    },
    {
      id: 3,
      img: "./8 1.png",
      title: "DSLR Camera",
      items: 6,
    },
    {
      id: 4,
      img: "./Frame 32.png",
      title: "Controller",
      items: 6,
    },
    {
      id: 5,
      img: "./Frame 29.png",
      title: "try",
      items: 6,
    },
  ];
  return (
    <Container>
      <Slider {...settings}>
        {data.map((item) => (
          <Box key={item.id}>
            <Card
              sx={{
                mt: 5,
                height: "140px",
                display: "flex",
                border: "1px solid #A5A5A5",
                borderRadius: "20px",
                mx: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "40%",
                  // border: "1px solid black",
                }}
              >
                <img
                  src={item.img}
                  alt="carousal"
                  style={{
                    marginLeft: "10px",
                    height: "100px",
                    width: "134px",
                    //   border: "1px solid red",
                  }}
                />
              </Box>
              {/* <img src="./2 1.png" alt="carousal" /> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "800", color: "#1B5A7D" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "800",
                    color: "#1B5A7D",
                  }}
                >
                  ({item.items}items)
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousal;
