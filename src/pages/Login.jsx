import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FireApi } from "../hooks/useRequest";
import { Box, Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import IconButton from "@mui/material/IconButton";

export const Form = styled("form")(({ theme }) => ({
  padding: "30px 0px",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  gap: 30,
  borderRadius: "10px",
  border: "1px solid #e5eaef",
  fontFamily: "Roboto, sans-serif",
  userSelect: "none",
  ".title": {
    fontSize: "30px",
    fontWeight: 600,
    textAlign: "center",
    color: "#2a3547",
  },
  ".form-inputs": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,

    ".form-input": {
      display: "grid",
      width: "90%",
    },
  },
  ".form-button": {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    button: {
      width: "90%",
    },

    ".form-divider": {
      width: "80%",
      height: "2px",
      backgroundColor: "#dddddd",
      textAlign: "center",
    },

    ".form-links": {
      fontSize: 12,
      color: "#2a3547",
      display: "flex",

      ".link": {
        margin: "0px 4px",
        border: "none",
        backgroundColor: "transparent",
        color: "#5d87ff",
        // color: '#2a3547',
        cursor: "pointer",
        fontWeight: "bold",

        "&:hover": {
          // color: '#5a6a85',
          color: "#4f79ea",
        },
      },
    },
  },
  [theme.breakpoints.down("lg")]: {
    width: "40%",
  },

  [theme.breakpoints.down("md")]: {
    gap: 40,
    width: "55%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: 35,
    border: "none",

    ".title": {
      fontSize: "26px",
      fontWeight: 500,
    },
  },
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handeSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = {
      email: form.get("email"),
      password: form.get("password"),
    };
    console.log(formData, "hello");
    try {
      const data = await FireApi("login", "POST", formData);
      if (data.status === true) {
        localStorage.setItem("token", data.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form onSubmit={handeSubmit}>
        <div className="title">
          <span>Login</span>
        </div>
        <div className="form-inputs">
          <div className="form-input">
            <Input
              name="email"
              placeholder="Email"
              startAdornment={
                <EmailOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
              }
            />
          </div>

          <div className="form-input">
            <Input
              name="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              startAdornment={
                <PasswordOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
              }
              endAdornment={
                <IconButton
                  size="small"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon
                      sx={{ mx: 1, color: "#516185" }}
                    />
                  ) : (
                    <VisibilityOutlinedIcon sx={{ mx: 1, color: "#516185" }} />
                  )}
                </IconButton>
              }
            />
          </div>
        </div>
        <div className="form-button">
          <Button
            variant="contained"
            type="submit"
            disableRipple
            disableTouchRipple
            disableElevation
            // disabled={loading}
            sx={{ height: 45 }}
          >
            Login
          </Button>
          <div className="form-divider" />
          <div className="form-links">
            <span>
              Don&apos;t have an account?{" "}
              <span
                style={{
                  color: "#5d87ff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                signup
              </span>
            </span>
          </div>
          <GoogleLogin
            type="standard"
            size="large"
            logo_alignment="center"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            // useOneTap
          />
        </div>
      </Form>
    </Box>
  );
};

export default Login;
