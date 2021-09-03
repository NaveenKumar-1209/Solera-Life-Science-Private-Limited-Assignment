import React from "react";
import BlockIcon from "@material-ui/icons/Block";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import EcoIcon from "@material-ui/icons/Eco";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import "./ThirdSection.scss";

const myIcon = [
  {
    id: 1,
    icon: <BlurCircularIcon />,
    text: "Traceable Ingredients",
  },
  {
    id: 2,
    icon: <BlockIcon />,
    text: "Non-GMO",
  },
  {
    id: 3,
    icon: <EcoIcon />,
    text: "Third Party Tested",
  },
  {
    id: 4,
    icon: <FilterVintageIcon />,
    text: "Vegan",
  },
  {
    id: 5,
    icon: <FormatColorResetIcon />,
    text: "No Artificial Flavors or Synthetic Fillers",
  },
];

const ThirdSection = () => {
  return (
    <div className="Third-section">
      <h1>
        Daily essentials with good intentions -- for living life or creating it.
      </h1>
      <div className="listItem">
        <ul>
          {myIcon.map((item, index) => {
            return (
              <li key={index}>
                <div className="icon">{item.icon}</div>
                <div className="texted">{item.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ThirdSection;
