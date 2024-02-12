import { useDispatch } from "react-redux";
import { signupUser } from "./redux/cardSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Stack,
  Typography,
  Container,
  Button,
  Select,
  MenuItem,
  InputLabel,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
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
        style: { color: "Black" },
      }}
      label={label}
    />
  );
}

const SignupPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const signupAuthenticated = useSelector(
    (state) => state.card.signupAuthenticated
  );

  console.log(signupAuthenticated);

  const users = useSelector((state) => state.card.users);

  console.log(users);

  const [signupData, setSignupData] = useState({
    username: "",
    role: "guest",
    password: "",
    confirmPassword: "",
  });

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSignup = () => {
    dispatch(signupUser(signupData));
  };

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
          initialValues={signupData}
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
                  value={signupData.username}
                  onChange={(e) =>
                    setSignupData({ ...signupData, username: e.target.value })
                  }
                />

                {errors.username &&
                touched.username &&
                signupData.username === "" ? (
                  <div style={{ color: "red" }}>{errors.username}</div>
                ) : null}

                <InputLabel
                  htmlFor="role"
                  sx={{ mt: 2, textAlign: "left", ml: 1 }}
                >
                  Role
                </InputLabel>

                <Select
                  sx={{ textAlign: "left" }}
                  id="role"
                  value={signupData.role}
                  onChange={(e) =>
                    setSignupData({ ...signupData, role: e.target.value })
                  }
                  variant="outlined"
                  margin="normal"
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
                  type="password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />

                {errors.password &&
                touched.password &&
                signupData.password === "" ? (
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
                  type="password"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />

                {errors.confirmPassword &&
                touched.confirmPassword &&
                signupData.confirmPassword === "" ? (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                ) : null}

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
