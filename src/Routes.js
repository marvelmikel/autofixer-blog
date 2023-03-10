import React from "react";
import Blog from "pages/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
