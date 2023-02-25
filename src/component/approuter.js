import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import Abouts from "../screens/about";
import SingleAbout from "../screens/singleabout";
import Posts from "../screens/post";
import SinglePost from "../screens/singlepost";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav className="text-center py-5 fs-5">
        <button className="mx-3 bg-dark"><Link className="App text-white" to="/">Home</Link></button>
        <button className="mx-3 bg-success"><Link className="App text-white" to="about">Images</Link></button>
        <button className="mx-3 bg-danger"><Link className="App text-white" to="post">Posts</Link></button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="singleabout/:id" element={<SingleAbout />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}