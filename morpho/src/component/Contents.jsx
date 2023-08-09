import React from "react";
import style from "../css/category.css";
import bannerimage1 from "../image/homebanner1.jpg";
import "../css/homebanner.css";
const Contents = () => {
  return (<div className="contents">
    <img className="banner1" src={bannerimage1} alt="Banner" />
  </div>)
};

export default Contents;