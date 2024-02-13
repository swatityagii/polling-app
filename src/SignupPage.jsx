import { useDispatch } from "react-redux";
import { signupUser } from "./redux/cardSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {
  Stack,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { resetError } from "./redux/authReducer";

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
        style: { color: "grey" },
      }}
      label={label}
    />
  );
}

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupAuthenticated = useSelector(
    (state) => state.card.signupAuthenticated
  );

  console.log(signupAuthenticated);

  const users = useSelector((state) => state.card.users);

  console.log(users);

  const signupValues = {
    username: "",
    password: "",
    confirmPassword: "",
    role: "guest",
  };

  const handleSignup = async (values) => {
    dispatch(signupUser(values));
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("*Username is required"),
    password: Yup.string()

      .matches(/[a-z]/, "*Password must include at least one lowercase letter")
      .matches(/[A-Z]/, "*Password must include at least one uppercase letter")
      .matches(/\d/, "*Password must include at least one digit")
      .min(8, "*Password must contain at least 8 characters")
      .required("*Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "*Passwords must match")
      .required("*Confirm Password is required"),
  });

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (signupAuthenticated) {
      navigate("/");
    }
  }, [signupAuthenticated]);

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
          width: "600px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4">Sign Up Form</Typography>

        <Formik
          initialValues={signupValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack>
                <Field
                  as={MyField}
                  id="outlined-basic"
                  name="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter your name..."
                />

                {errors.username && touched.username ? (
                  <div style={{ color: "red" }}>{errors.username}</div>
                ) : null}

                <InputLabel
                  htmlFor="role"
                  sx={{ mt: 1, textAlign: "left", ml: 1 }}
                >
                  Role
                </InputLabel>

                <Select
                  sx={{ textAlign: "left" }}
                  id="role"
                  variant="outlined"
                  name="role"
                  margin="normal"
                  defaultValue="guest"
                >
                  <MenuItem value="guest">Guest</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>

                <Field
                  as={MyField}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  margin="normal"
                  placeholder="Enter your password..."
                  type={showPassword ? "text" : "password"}
                />

                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}

                <Field
                  as={MyField}
                  id="outlined-basic"
                  label="Confirm Password"
                  name="confirmPassword"
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter your password..."
                  type={showPassword ? "text" : "password"}
                />

                {errors.confirmPassword && touched.confirmPassword ? (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
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
                  sx={{ mb: 3 }}
                  onClick={() => handleSignup()}
                  type="submit"
                >
                  Sign up
                </Button>
                <span>
                  Already have an account?
                  <Link to="/">{"Login"}</Link>
                </span>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </Container>
  );
};

export default SignupPage;
