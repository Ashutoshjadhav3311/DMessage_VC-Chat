import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  About,
  Contact,
  Blog,
  Posts,
  Home,
  Post,
} from "./components";
import VC from "./VC";
import App from "./App";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/App" element={<App />} />
      <Route path="/VC" element={<VC />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
