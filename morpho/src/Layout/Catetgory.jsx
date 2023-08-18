import React, { useState } from "react";
import style from "../css/category.css";

const Category = () => {
  const menuData = [
    { name: "PRODUCT", subMenus: ["Wall Panel", "Aluminum box", "Manufacturing & Anodizing", "Paint & Marking"] },
    { name: "INSPARATION", subMenus: ["Insparation"] },
    { name: "PRICES & SERVICE", subMenus: ["Price", "Discount"] },
    { name: "SUPPORT", subMenus: ["Q&A", "서브메뉴3-2", "서브메뉴3-3", "서브메뉴3-4"] },
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
            <p>{menu.name}</p>
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
              <li key={subIdx}>{subMenu}</li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default Category;
