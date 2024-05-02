import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
};

export default Homepage;
