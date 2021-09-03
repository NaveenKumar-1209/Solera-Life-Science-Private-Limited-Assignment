import React from "react";
import "./FourthSection.scss";

const FourthSection = () => {
  const imgLink =
    "https://images.ctfassets.net/uuc5ok478nyh/3b2rDAxg4SGASVbyiHYA4J/e1d474b1648af04c1130bc67502e7d2a/home-feat-dyson.jpg?w=570&h=570&fl=progressive&q=90&fm=jpg";
  return (
    <div className="fourth-section">
      <div className="yellowCircle"></div>
      <div className="medicine-and-text">
        <div className="medicine-img">
          <img src={imgLink} alt="?#" />
        </div>
        <div className="medicine-img-text">
          <h1 className="instructions">We're not about pseudoscience and half-truths</h1>
          <p className="instructions">
            From Omega-3 DHA from microalgae to regeneratively-farmed pea
            protein, our scientists studied diets and genetics to make daily
            essentials based on what we need
          </p>
          <h3 className="instructions">Who We Are</h3>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
