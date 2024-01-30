import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Category from "../Home/HomeContents/Catetgory";
import ProductArticle from "./ProductArticle";
import "../../css/reset.css";
import "./index.css";


const Product = () => {
  const [isWide, setIsWide] = useState(false);

  const handleResize = () => {
    if (window.innerHeight / window.innerWidth < 0.6) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  };

  //미디어 쿼리
  useEffect(() => {
    handleResize(); // 컴포넌트가 마운트될 때 한 번 호출
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트에 대한 리스너 추가

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = isWide
    ? { flex: "auto", width: "20vw", height: "50em" }
    : { width: "100vw", height: "60vh" };
  const fontStyle = isWide ? { fontSize: "2.5vw" } : { fontSize: "6vw" };
  const pStyle = isWide ? { fontSize: "1vw" } : { fontSize: "2vw" };
  const wholedivStyle = isWide
    ? { flexDirection: "row", marginTop: "1vh", paddingLeft: "0", display: 'flex'}
    : { flexDirection: "column", marginTop: "1vh" , display: 'flex'};

  return (
    <div>
      <Layout>
        <Category />
        <div style={wholedivStyle} clasName="wholeDiv">
          <ProductArticle
            className="wallPanel"
            title="Wall Panel"
            discription="저희는 사용자가 필요로 하는 거의`모든 인터페이스를 판넬에 디자인, 설치 가공하는 서비스를 제공합니다."
            imgurl=""
            fontStyle={fontStyle}
            pStyle={pStyle}
            style={style}
          />
          <ProductArticle
            className="aluminumBox"
            title="Aluminum Box"
            discription="특화된 알루미늄 프로파일을 사용하여 각각의 면을 컷팅, 삽입, 고정
            시키는 방식으로 원하는 사이즈의 BOX를 제작 할 수 있습니다."
            imgurl=""
            fontStyle={fontStyle}
            pStyle={pStyle}
            style={style}
          />
          <ProductArticle
            className="manufacturing"
            title="Manufacturing & Anodizing"
            discription="사용자가 직접 디자인 한 캐드(DXF,DEG) 파일을 가공하여 SILVER,
            BLACK, GOLD 등 색의 알루미늄 표면처리를(ANODIZING) 합니다."
            imgurl=""
            fontStyle={fontStyle}
            pStyle={pStyle}
            style={style}
          />
          <ProductArticle
            className="paintAndMarking"
            title="Paint & Marking"
            discription="판넬 레터링과 로고 인쇄는 음각조각 후 페인팅, UV 프린팅, 레이저
            가공 등으로 제작합니다."
            imgurl=""
            fontStyle={fontStyle}
            pStyle={pStyle}
            style={style}
          />
        </div>
      </Layout>
    </div>
  );
};
export default Product;
