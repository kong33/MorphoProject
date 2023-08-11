
import React, { useEffect, useState } from 'react';
import style from "../css/category.css";
import bannerimage1 from "../image/homebanner1.jpg";

const Contents = () => {

  return (<div className="contents">
    <div className="banner1">
    <img className="banner1_1" src={bannerimage1} alt="Banner" />
    <h1 className="word">best quility</h1>
    </div>
  </div>)
};

export default Contents;