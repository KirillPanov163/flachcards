import React from "react";
import Header from "../../widgets/Header/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <footer className="text-center text-l text-gray-500 p-2 bg-gray-100">
        © FlashCards App Whales — 2025
      </footer>
    </div>
  );
}

export default Layout;
