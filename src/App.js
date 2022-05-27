import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";
import Feed from "./components/Feed";
import Users from "./components/Users";
import Profile from "./components/Profile";
import FeedCard from "./reusable/FeedCard";
import Following from "./reusable/Following";
import Follow from "./reusable/Follow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />}>
          <Route path="" element={<Feed />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />}>
            <Route path="" element={<FeedCard shadow="shadow.none" desfont="text-xs" h="h-14" w="w-32"/>} />
            <Route path="follow" element={<Follow/>} />
            <Route path="following" element={<Following/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
