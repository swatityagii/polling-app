import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography, Container, Stack } from "@mui/material";

const ListPolls = () => {
  return (
    <>
      <AppBar>
        <Typography variant="h5" align="center" sx={{ mt: 1 }}>
          DASHBOARD
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="inherit"
            sx={{
              borderRadius: "10px",
              border: "1px solid #fff",
            }}
          >
            New Poll
          </Button>
          <Button
            color="inherit"
            sx={{
              borderRadius: "10px",
              border: "1px solid #fff",
            }}
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        align="center"
        sx={{
          width: "1100px",
          border: "2px solid #fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          mt: 14,
        }}
      >
        <Container
          sx={{
            width: "1000px",
            border: "2px solid #fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            mt: 2,
            pb: 3,
          }}
        >
          <Typography align="start" sx={{ ml: 2, mt: 2, mb: 2 }}>
            hjgh
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
        </Container>

        <Container
          sx={{
            width: "1000px",
            border: "2px solid #fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            mt: 2,
            pb: 3,
          }}
        >
          <Typography align="start" sx={{ ml: 2, mt: 2, mb: 2 }}>
            hjgh
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "Highlight",
              color: "#fff",
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
          </Stack>
        </Container>
      </Container>
    </>
  );
};
export default ListPolls;
