import React, { useState } from "react";
import '../../../css/category.css';
import {Link} from 'react-router-dom';

const Category = () => {
  const menuData = [
    { name: "PRODUCT", subMenus: ["Wall Panel | 벽부 판넬", "Aluminum box | 알루미늄 박스", "Manufacturing & Anodizing | 제조, 처리", "Paint & Marking | 도색, 마킹"] },
    { name: "INSPARATION", subMenus: ["Insparation | 참고 디자인"] },
    { name: "PRICES & SERVICE", subMenus: ["Price | 가격", "Shipping | 배송"] },
    { name: "SUPPORT", subMenus: ["Q&A", "How to connect us | 문의"] },
  ];

  const [hide, setHide] = useState(Array(menuData.length).fill(false));

  const mouseEvent = (index, bool) => {//mouseEvent 함수는 menuName, bool 두 개의 파라미터를 받는다.
    const change = [...hide];//change는 hide의 복사본
    change[index] = bool;//change object 중 menuName과 같은 것이 있다면 bool로 바꾸기
    setHide(change);//hide를 change로 수정
  };

  return (
    <nav className="nav">
      <ul className="navContainer">
        {menuData.map((menu, idx) => (
          <li
            key={idx}
            className={hide[idx] ? "active" : "none"}
            onMouseEnter={() => mouseEvent(idx, true)}
            onMouseLeave={() => mouseEvent(idx, false)}
          >
            {/* <p>{menu.name}</p> */}
            <Link to={`/${menu.name.toLowerCase()}`}className="link">{menu.name}</Link>
          </li>
        ))}
      </ul>
      <div className="detailMenu">
        {menuData.map((menu, idx) => (
          <ul
            key={idx}
            onMouseEnter={() => mouseEvent(idx, true)}
            onMouseLeave={() => mouseEvent(idx, false)}
          >
            {menu.subMenus.map((subMenu, subIdx) => (
              <li key={subIdx}>
          <Link className="link" to={`/${subMenu.toLowerCase().replace(/[가-힣|]/g, '').replace(/\s/g, '')}`}>{subMenu}</Link>

              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Category;
