import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { adminAllPoll } from "./redux/authReducer";
import { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

const BASE_URL = "https://etechpolltesting.onrender.com/";

const ListPolls = () => {
  const dispatch = useDispatch();
  const polls = useSelector((state) => state.card.polls);

  console.log(polls);

  const pollFetch = async () => {
    try {
      const response = await axios.get(
        "https://etechpolltesting.onrender.com/list_polls"
      );

      console.log(response.data);
      dispatch(adminAllPoll(response.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pollFetch();
  }, []);

  return (
    <>
      <AppBar>
        <Typography variant="h5" align="center" sx={{ mt: 1 }}>
          ADMIN DASHBOARD
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
          width: "500px",

          borderRadius: "10px",
          padding: "20px",

          mt: 14,
        }}
      >
        {polls.map((poll) => (
          <Card key={poll._id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" color="primary">
                {poll.title}
              </Typography>
              <Container
                sx={{
                  border: "2px solid #fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  padding:"3px",
                }}
              >
                {poll.options.map((option, index) => (
                  <Container key={index}>
                    <Container
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Stack key={index}> {option.option}</Stack>
                      <Stack sx={{ display: "flex", flexDirection: "row" }}>
                        <span> Votes </span> <span>{option.vote}</span>
                      </Stack>
                    </Container>
                  </Container>
                ))}
              </Container>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ListPolls;
