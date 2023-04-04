import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";

import WriteBlog from "./pages/writeblog/WriteBlog";
import BlogPosts from "./pages/blogposts/BlogPosts";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import {userColumns} from "./datatablesource";
import { useContext } from "react";
import { Context } from "./context/Context";
import TravelTips from "./pages/travelTips/TravelTips";
import SingleTips from "./pages/singleTips/SingleTips";
import WriteTips from "./pages/writeTips/WriteTips";
function App() {
  const {admin} = useContext(Context);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={admin ? <Home /> : <Login />} />
            <Route path="/users" >
              <Route index element={admin ? <List columns={userColumns}/> : <Login />} />            
            </Route>
            <Route path="/writeblog" >
              <Route index element={admin ? <WriteBlog/> : <Login />} />
            </Route>
            <Route path="/blogposts" >
              <Route index element={<BlogPosts/>} />
              <Route path=":postId" element={<SingleBlog/>} />
            </Route>
            <Route path="/travelTips" >
              <Route index element={<TravelTips/>} />
              <Route path=":tipId" element={<SingleTips/>} />
            </Route>
            <Route path="/writeTips" >
              <Route index element={admin ? <WriteTips/> : <Login />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
