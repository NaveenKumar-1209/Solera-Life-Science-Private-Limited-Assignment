import React from "react";
import "./SecondSection.scss";

const SecondSection = () => {
  const imageOne =
    "https://images.ctfassets.net/uuc5ok478nyh/6dDqtNr4Taao1Qwl4zf6UK/e1141217232b45bdc278746c3a6dcf87/Home-Hero-Mobile.jpg?w=912&h=912&fl=progressive&q=90&fm=jpg";
  return (
    <div className="second-section">
      <img src={imageOne} alt="#?" />
      <div className="textButton">
        <p>
          The future
          <br /> of health <br /> --is clear.
        </p>
        <button>Shop All</button>
      </div>
    </div>
  );
};

export default SecondSection;
