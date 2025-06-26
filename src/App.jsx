import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home"
import './App.css'
import ProjectPage from './pages/ProjectPage'
import Layout from "./components/Layout";
import AllProjects from "./pages/AllProjects";
import Contact from "./components/Contact";
import Feats from "./components/Feats";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        {/* All pages inside layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/feats" element={<Feats />} /> 
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
