import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import RightContentWrapper from "./RightContentWrapper";

const Layout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      
      {/* ✅ Navbar: always top on mobile */}
      <div  className="md:sticky order-1 md:order-none md:col-span-3">
        <Navbar />
      </div>

      {/* ✅ Sidebar: below navbar on mobile, left column on desktop */}
      <div className="order-2 md:order-none md:col-span-1">
        <div className="md:sticky md:top-10">
          <Sidebar />
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="order-3 md:order-none md:col-span-2 flex flex-col gap-6">
        <RightContentWrapper>
          <Outlet />
        </RightContentWrapper>
      </div>
    </div>
  );
};

export default Layout;
