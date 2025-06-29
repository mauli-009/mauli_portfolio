import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Layout from "./components/Layout";
import AllProjects from "./pages/AllProjects";
import Contact from "./components/Contact";
import Feats from "./components/Feats";
import "./App.css"; // Keep global styles here if needed


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b2626] via-[#1a1a1a] to-[#000] text-white relative">
      {/* Optional animated particle layer */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feats" element={<Feats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
