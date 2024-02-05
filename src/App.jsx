import { TextField, Stack, Typography,Container, Button, Link,} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../redux/cardSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.card.loading);
  // const error = useSelector((state) => state.card.error);

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = () => {
    dispatch(loginUser(loginCredentials));
  };

  const handleSignup = () => {
    dispatch(signupUser(signupData));
  };
  return (
    <>
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
              type="password"
              value={loginCredentials.password}
              onChange={(e) =>
                setLoginCredentials({
                  ...loginCredentials,
                  password: e.target.value,
                })
              }
            />

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
        <Container
          align="center"
          sx={{
            width: "600px",
            border: "2px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack>
            <Typography variant="h4">Sign Up Form</Typography>

            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              margin="normal"
              placeholder="Enter your name..."
              value={signupData.username}
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              placeholder="Enter your Email..."
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password..."
              type="password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password..."
              type="password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value,
                })
              }
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ mb: 3 }}
              onClick={() => handleSignup()}
            >
              Sign up
            </Button>
            <span>
              Already have an account?
              <Link href="#" underline="hover">
                {"Login"}
              </Link>
            </span>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default App;
