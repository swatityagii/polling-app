import { useDispatch } from "react-redux";
import { signupUser } from "./redux/cardSlice";
import {
  TextField,
  Stack,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { Link} from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    dispatch(signupUser(signupData));
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 5, mb: 5 }}
    >
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

          <InputLabel htmlFor="role" sx={{ mt: 2, textAlign: "left", ml: 1 }}>
            Role
          </InputLabel>

          <Select
            sx={{ textAlign: "left" }}
            htmlFor="Role"
            id="role"
            value={signupData.role}
            onChange={(e) =>
              setSignupData({ ...signupData, role: e.target.value })
            }
            variant="outlined"
            margin="normal"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>

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
            <Link to="/">
              {"Login"}
            </Link>
          </span>
        </Stack>
      </Container>
    </Container>
  );
};

export default SignupPage;
