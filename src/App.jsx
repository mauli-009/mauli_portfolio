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
import SplashIntro from "./components/intro/SplashIntro";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

const App = () => {
  const [introDone, setIntroDone] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => setIntroDone(true), 3500); // 3.5 seconds
    const loaderTimer = setTimeout(() => setLoadingDone(true), 5000); // optional loader after

    return () => {
      clearTimeout(introTimer);
      clearTimeout(loaderTimer);
    };
  }, []);


  if (!loadingDone) return <Loader />; // optional

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
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Route>
    </Routes>
  </BrowserRouter>
</div>

  );
};

export default App;
