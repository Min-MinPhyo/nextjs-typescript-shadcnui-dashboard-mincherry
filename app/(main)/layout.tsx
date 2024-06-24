import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>

      <div className="flex">
        <div className="gidden md:block h-[350vh]">
          <Sidebar />
        </div>

        <div className="p-5 w-full md:max-w-[1140px]"> {children}</div>
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
