// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 text-white dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16 px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
