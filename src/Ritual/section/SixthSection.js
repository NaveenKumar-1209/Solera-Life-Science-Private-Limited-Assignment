import React from "react";
import "./SixthSection.scss";

const SixthSection = () => {
  const img = [
    "https://images.ctfassets.net/uuc5ok478nyh/5DdNekoChwbHjRPbe1WG3T/da5e80bef39ad8ece21bad46d6119f3e/PDP_EFW50_Bottle__1_.jpg?w=555&q=90",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slack-imgs-1547071559.jpg?crop=0.981xw:0.490xh;0,0.425xh&resize=1200:*",
    "https://images.ctfassets.net/uuc5ok478nyh/3MK3Sz4okY78iVRU575Vkr/2d16d86a29e30903a5ab952a90d2816a/PDP_EPRE_Bottle__1_.jpg?w=555&q=90",
    "https://images.ctfassets.net/uuc5ok478nyh/4pd4CgqDAnlP4ErgKXmi4D/fdcfd73ac0b922e27addb8d50667854e/PDP_EFM50_Bottle.jpg?w=555&q=90",
  ];
  const hoverimg = [
    "https://images.ctfassets.net/uuc5ok478nyh/4cY30HLTkeFH59QMaKrSzq/d840a1210c2fe3ffd8e08f58fa18c9f4/PDP_EPRE_Hand.jpg?w=280&q=100",
    "https://images.ctfassets.net/uuc5ok478nyh/5HlkJr5AeLsWBEiw2DRzRP/08efddfea2e8e7128c658394178724e3/PDP-EPOST-Hand.jpg?w=280&h=280&fl=progressive&q=100&fm=jpg",
    "https://purewows3.imgix.net/images/articles/2017_11/ritual_vitamins_how_do_they_make_you_feel.jpg?auto=format,compress&cs=strip&fit=min&",
    "https://www.byrdie.com/thmb/Ho3jWENBm_ShJPbvHPABFz86QAY=/1000x750/smart/filters:no_upscale()/ritual-84f0a08b799048b8afaa37d383226753.jpg",
  ];

  const MedicineCard = [
    {
      id: 1,
      img: "https://images.ctfassets.net/uuc5ok478nyh/5DdNekoChwbHjRPbe1WG3T/da5e80bef39ad8ece21bad46d6119f3e/PDP_EFW50_Bottle__1_.jpg?w=555&q=90",
      hoverimg:
        "https://images.ctfassets.net/uuc5ok478nyh/4cY30HLTkeFH59QMaKrSzq/d840a1210c2fe3ffd8e08f58fa18c9f4/PDP_EPRE_Hand.jpg?w=280&q=100",
      FirstLine: "Essential for Women",
      SecondLine: "Multivitamin 18+",
      ThirdLine: "The clinical-backed multivitamin, reimagined for women 18+",
    },
    {
      id: 2,
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/slack-imgs-1547071559.jpg?crop=0.981xw:0.490xh;0,0.425xh&resize=1200:*",
      hoverimg:
        "https://images.ctfassets.net/uuc5ok478nyh/5HlkJr5AeLsWBEiw2DRzRP/08efddfea2e8e7128c658394178724e3/PDP-EPOST-Hand.jpg?w=280&h=280&fl=progressive&q=100&fm=jpg",
      FirstLine: "Essential for Women",
      SecondLine: "Prenatal Multivitamin",
      ThirdLine:
        "The prenatal multivitamin for thinking, trying, and when it's time.",
    },
    {
      id: 3,
      img: "https://images.ctfassets.net/uuc5ok478nyh/3MK3Sz4okY78iVRU575Vkr/2d16d86a29e30903a5ab952a90d2816a/PDP_EPRE_Bottle__1_.jpg?w=555&q=90",
      hoverimg:
        "https://purewows3.imgix.net/images/articles/2017_11/ritual_vitamins_how_do_they_make_you_feel.jpg?auto=format,compress&cs=strip&fit=min&",
      FirstLine: "Essential Protein",
      SecondLine: "Daily Shake 18+",
      ThirdLine: "The reimagined plant-based protein for adults 18-49.",
    },
    {
      id: 4,
      img: "https://images.ctfassets.net/uuc5ok478nyh/4pd4CgqDAnlP4ErgKXmi4D/fdcfd73ac0b922e27addb8d50667854e/PDP_EFM50_Bottle.jpg?w=555&q=90",
      hoverimg:
        "https://www.byrdie.com/thmb/Ho3jWENBm_ShJPbvHPABFz86QAY=/1000x750/smart/filters:no_upscale()/ritual-84f0a08b799048b8afaa37d383226753.jpg",
      FirstLine: "Essential for Men",
      SecondLine: "Multivitamin 18+",
      ThirdLine:
        "Formulated for men 18-49 to help fill nutrient gaps in their diet.*",
    },
  ];
  return (
    <div className="Sixth-Section">
      <div className="top-text">
        <h1>Featured Products</h1>
        <h4>
          <a href="#">Shop All</a>
        </h4>
      </div>
      <div className="cardList">
        <ul>
          {MedicineCard.map((item, index) => {
            return (
              <li key={index}>
                <div className="imghover">
                  <img id="normalEffect" src={item.img} alt="#?" />
                  <img id="hoverEffect" src={item.hoverimg} alt="#?" />
                  <h1>Learn More</h1>
                </div>
                <p>{item.FirstLine}</p>
                <h3>{item.SecondLine}</h3>
                <p>{item.ThirdLine}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SixthSection;
