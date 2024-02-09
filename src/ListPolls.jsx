import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography, Container,Stack } from "@mui/material";

const ListPolls = () => {
  return (
    <>
      <AppBar position="static">
        <Typography variant="h5" align="center" >
          ADMIN POLL
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button color="inherit">New Poll</Button>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
      <Container
        align="center"
        sx={{
          width: "700px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          mt:2
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "row", }}>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
            <Toolbar>jhgj</Toolbar>
        </Stack>
        </Container>
      
    </>
  );
};
export default ListPolls;
