import React from "react";
import "./Home.scss";
import Header from "./section/Header";
import Card from "./section/Card"
import SecondSection from "./section/SecondSection";
import ThirdSection from "./section/ThirdSection";
import FourthSection from "./section/FourthSection";
import FifthSection from "./section/FifthSection";
import SixthSection from "./section/SixthSection";

const Home = () => {
  
  return (
    <div className="container">
      <Header />
      <SecondSection />
      <div className="third-section">
        <Card />
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
};

export default Home;
