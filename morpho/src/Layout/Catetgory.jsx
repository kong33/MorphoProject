import React, { useState } from "react";
import style from "../css/category.css";

const Category = () => {
  const menuData = [
    { name: "Product", subMenus: ["Front Panels", "Enclosures", "Milled parts", "Signs"] },
    { name: "Inspiration", subMenus: ["서브메뉴2-1", "서브메뉴2-2", "서브메뉴2-3", "서브메뉴2-4"] },
    { name: "PRICES & SERVICE", subMenus: ["서브메뉴2-1", "서브메뉴2-2", "서브메뉴2-3", "서브메뉴2-4"] },
    { name: "메뉴3", subMenus: ["서브메뉴3-1", "서브메뉴3-2", "서브메뉴3-3", "서브메뉴3-4"] },
    // ... 이하 생략 ...
  ];

  const [hide, setHide] = useState(Array(menuData.length).fill(false));

  const mouseEvent = (index, bool) => {
    const change = [...hide];
    change[index] = bool;
    setHide(change);
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
