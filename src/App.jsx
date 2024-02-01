import {
  TextField,
  Stack,
  Typography,
  Container,
  Button,
  Link,
} from "@mui/material";

const App = () => {
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
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password..."
            />

            <Button variant="contained" color="primary">
              Login
            </Button>
            <Container sx={{ display: "flex", flexDirection: "row" , mt: 3, mb:5 ,gap:9 }}>
            <Link href="#" underline="hover" >
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
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              placeholder="Enter your Email..."
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password..."
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password..."
            />

            <Button variant="contained" color="primary">
              Sign up
            </Button>
            <span>Already have an account? 
            <Link href="#" underline="hover" >
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
