import React from "react";
import "./FifthSection.scss";

const FifthSection = () => {
    const mapLink = "https://110101-313254-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/10/500bc0202.jpg";
  return (
    <div className="fifth-section">
      <div className="texted">
        <h1 className="ForPadding">You deserve traceability</h1>
        <p className="ForPadding">
          We share our sources, studies, and suppliers -- daily essentials
          backed by the first visible supply chain of its kind.
        </p>
        <h3 className="ForPadding" id="Ingredients"><a href="#">Meet Our Ingredients</a></h3>
        <h3 className="ForPadding" id="Clinical"><a href="#">Our Clinical Study</a></h3>
      </div>
      <div className="mapImg">
          <img src={mapLink} alt="#?" />
      </div>
    </div>
  );
};

export default FifthSection;
