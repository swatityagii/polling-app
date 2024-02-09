import {
    TextField,
    Stack,
    Typography,
    Container,
    Button,
    InputLabel
  } from "@mui/material"
  
const AddPoll = () => {
    return(
        <>
        <Container
        align="center"
        sx={{
          width: "400px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack>
            <Typography sx={{ textAlign: "left"}}>Title:</Typography>
            <TextField sx={{mb:1, "& input": { height: "8px" }}}
            id="outlined-basic"
            variant="outlined"
          />
          <Typography sx={{ textAlign: "left", mb:1}}
                      >
            Options:
          </Typography>
           <InputLabel sx={{ textAlign: "left"}}>Opt1</InputLabel>
            <TextField sx={{mb:1, "& input": { height: "8px" }}}
            id="outlined-basic"
            variant="outlined"

          />
           <InputLabel sx={{ textAlign: "left"}}>Opt2</InputLabel>
            <TextField sx={{mb:1, "& input": { height: "8px" }}}
            id="outlined-basic"
            variant="outlined"

          />
           <InputLabel sx={{ textAlign: "left"}}>Opt3</InputLabel>
            <TextField sx={{mb:1, "& input": { height: "8px" }}}
            id="outlined-basic"
            variant="outlined"

          />
           <InputLabel sx={{ textAlign: "left"}}>Opt4</InputLabel>
            <TextField sx={{mb:1, "& input": { height: "8px" }}}
            id="outlined-basic"
            variant="outlined"

          />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
          </Stack>
         
        </Stack>
      </Container>
        </>
    );
};
export default AddPoll;