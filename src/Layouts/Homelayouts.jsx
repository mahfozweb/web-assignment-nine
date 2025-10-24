import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Homelayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen bg-base-500">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Homelayouts;
