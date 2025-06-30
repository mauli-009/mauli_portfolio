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
import Particles from "./components/3d/Particles";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
<div className="relative min-h-screen">
  {/* ✅ Particles background */}
  <Particles
    className="fixed top-0 left-0 w-full h-full z-[-1]"
    particleCount={300}
    particleSpread={8}
    speed={0.2}
    particleColors={["#4f46e5", "#6366f1", "#a5b4fc"]}
    alphaParticles={true}
    moveParticlesOnHover={true}
    particleHoverFactor={1.2}
    particleBaseSize={120}
    sizeRandomness={0.6}
  />

  {/* ✅ Your main layout */}
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feats" element={<Feats />} />
      </Route>
    </Routes>
  </BrowserRouter>
</div>

  );
};

export default App;
