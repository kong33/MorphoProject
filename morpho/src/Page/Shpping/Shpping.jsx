import React from "react";
import Layout from "../../Layout/Layout";
import Category from "../Home/HomeContents/Catetgory";
import phone from "../../image/phone.png";
const Shpping = () => {
  return (
    <Layout>
      <Category />
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          top: "-20vh",
          margin: "0",
          width: "100vw",
          height: "100vh",
        }}
      >
        <section
          style={{
            margin: "10vw",
            padding: "2vw 0 0 0 ",
          }}
        >
          <h1
            style={{
              fontSize: "10vw",
              margin: "0",
            }}
          >
            Shipping
          </h1>
          <p
            style={{
              margin: "0",
              fontSize: "2vw",
            }}
          >
            배송 안내
          </p>
        </section>
        <p
          style={{
            margin: "-5vw 0 10vw 10vw ",
            fontSize: "1.2vw",
            lineHeight: "2.5vw",
          }}
        >
          모든 제품은 주문 제작을 받고 있기에 제품 제작 기간은 3~7일 정도
          소요됩니다.
          <br />
          배송날짜 조정을 원하실 경우 아래의 번호로 연락주시면 <br />
          친절히 상담해드리겠습니다.
        </p>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "0 0 5vw 0",
            position: "relative",
            top: "-5vh",
          }}
        >
          <img
            src={phone}
            alt="전화기 아이콘"
            style={{
              margin: "0 2vw 0 10vw",
              width: "3vw",
              height: "3vw",
              flexBasis: "auto",
            }}
          />
          <p
            style={{
              flexBasis: "auto",
              fontSize: "3vw",
              margin: "0",
              position: "relative",
              top: "-1vh",
            }}
          >
            010.4288.0941
          </p>
        </section>
        <img src="" alt="가격 안내 이미지" />
      </div>
    </Layout>
  );
};

export default Shpping;
