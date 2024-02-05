import { useDispatch } from "react-redux";
import { loginUser } from "../redux/cardSlice";
import {
  TextField,
  Stack,
  Typography,
  Container,
  Button,
  Link,
  //   FormControlLabel,
  //   Checkbox,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(loginUser(loginCredentials));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5, mb: 5 }}
    >
      <Container
        align="center"
        sx={{
          width: "500px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack>
          <Typography variant="h4">Login Form</Typography>

          <TextField
            id="outlined-basic"
            label="Username or Email"
            variant="outlined"
            margin="normal"
            placeholder="Enter Username or Email..."
            value={loginCredentials.username}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                username: e.target.value,
              })
            }
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            margin="normal"
            placeholder="Enter your password..."
            type={showPassword ? "text" : "password"}
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            mt={1}
            mb={1}
          >
            <IconButton
              onClick={handleTogglePassword}
              sx={{ color: "Highlight" }}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
            <Typography sx={{ pr: 1, color: "Highlight" }}>
              {showPassword ? "Hide" : "Show"} Password
            </Typography>
          </Stack>

          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 3,
              mb: 5,
              gap: 9,
            }}
          >
            <Link href="#" underline="hover">
              {"Forgot Password?"}
            </Link>
            <span>
              <span>Don't have an account?</span>
              <Link href="#" underline="hover">
                {"Sign up?"}
              </Link>
            </span>
          </Container>
        </Stack>
      </Container>
    </Container>
  );
};

export default LoginPage;
