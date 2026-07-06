import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto">

      {/* Navbar: always top */}
      <div className="order-1 md:order-none md:col-span-3">
        <Navbar />
      </div>

      {/* Sidebar: sticky left on desktop */}
      <div className="order-2 md:order-none md:col-span-1">
        <div className="md:sticky md:top-10">
          <Sidebar />
        </div>
      </div>

      {/* Main content: natural page scroll (no height cap) */}
      <div className="order-3 md:order-none md:col-span-2 flex flex-col gap-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;