import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <main>
          <Features />
          <About />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Home;
