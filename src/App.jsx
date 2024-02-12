import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AddPoll from "./AddPoll";
import ListPolls from "./Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addpoll" element={<AddPoll />} />
        <Route path="/dashboard" element={<ListPolls />} />
      </Routes>
    </Router>
  );
};

export default App;
