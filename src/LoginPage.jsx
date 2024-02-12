import { useDispatch } from "react-redux";
import { loginUser } from "./redux/cardSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoginresetError } from "./redux/authReducer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  TextField,
  Stack,
  Typography,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const validationSchema = Yup.object({
  username: Yup.string().required("*Username or Email is required"),
  password: Yup.string().required("*Password is required"),
});

function MyField(props) {
  const { label, ...otherProps } = props;

  return (
    <TextField
      {...otherProps}
      InputProps={{
        style: { color: "black" },
        inputProps: {
          style: { color: "black" },
        },
      }}
      InputLabelProps={{
        style: { color: "Black" },
      }}
      label={label}
    />
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(loginUser(loginCredentials));
  };

  const loginAuthenticated = useSelector(
    (state) => state.card.loginAuthenticated
  );

  console.log(loginAuthenticated);

  useEffect(() => {
    return () => {
      dispatch(LoginresetError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (loginAuthenticated) {
      navigate("/dashboard");
    }
  }, [loginAuthenticated]);

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
        <Typography variant="h4">Login Form</Typography>
        <Formik
          initialValues={loginCredentials}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack>
                <Field
                  as={MyField}
                  id="outlined-basic"
                  label="Username or Email"
                  name="username"
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

                {errors.username &&
                touched.username &&
                loginCredentials.username === "" ? (
                  <div style={{ color: "red" }}>{errors.username}</div>
                ) : null}

                <Field
                  as={MyField}
                  id="outlined-basic"
                  label="Password"
                  name="password"
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

                {errors.password &&
                touched.password &&
                loginCredentials.password === "" ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}

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

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                >
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
                    <Link to="/signup" underline="hover">
                      {"Sign up"}
                    </Link>
                  </span>
                </Container>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </Container>
  );
};

export default LoginPage;
