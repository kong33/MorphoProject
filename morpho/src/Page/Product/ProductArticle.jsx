import React from "react";

const ProductArticle = ({
  className,
  title,
  discription,
  imgurl,
  pStyle,
  fontStyle,
  style
}) => {
  return (
    <div className={`${className} article`} style={style}>
      <h1 style={fontStyle}>{title}</h1>
      <p style={pStyle}>{discription}</p>
      <img src={imgurl} />
    </div>
  );
};
export default ProductArticle;
