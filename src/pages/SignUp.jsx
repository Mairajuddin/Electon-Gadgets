import { useEffect } from "react";
import { Form } from "./Login";
import { Box, Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FireApi } from "../hooks/useRequest";
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const formData = {
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    };
    try {
      const data = await FireApi("signup", "POST", formData);
      data.status === true ? navigate("/login") : null;
      console.log(data, "hehehehehe");
    } catch (error) {
      console.log(error, "error");
    }
  };

  //   try {
  //     const data = await FireApi("signup", "POST", formData).then((res) => {
  //       console.log(res, "sdfkskfks");
  //       if (res.code >= 200 && res.code <= 299) {
  //         console.log("navigate to login");
  //         navigate("/login");
  //       }
  //     })} catch (error) {
  //     console.log(error, "error");
  //   }
  // };

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
      <Form onSubmit={handleSubmit}>
        <div className="title">
          <span>Sign Up</span>
        </div>
        <div className="form-inputs">
          <div className="form-input">
            <Input
              name="username"
              placeholder="Name"
              startAdornment={<PersonIcon sx={{ mx: 1, color: "#516185" }} />}
            />
          </div>
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
              name="contact"
              placeholder="Contact"
              startAdornment={
                <LocalPhoneIcon sx={{ mx: 1, color: "#516185" }} />
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
            Sign Up
          </Button>
          <div className="form-divider" />

          <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
            <GoogleIcon
              size="large"
              color="error"
              sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 0px 0px 1px #e5eaef",
                borderRadius: 1,
                p: 1,
                fontSize: 50,
                cursor: "pointer",
              }}
            />

            <FacebookIcon
              size="large"
              color="primary"
              sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 0px 0px 1px #e5eaef",
                borderRadius: 1,
                p: 1,
                fontSize: 50,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </Form>
    </Box>
  );
};

export default SignUp;
