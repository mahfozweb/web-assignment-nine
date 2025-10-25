import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const Homelayouts = () => {
  return (
    <div className="md:max-w-[1100px] mx-auto md:px-5">
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen bg-base-500">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Homelayouts;
