import React, { useState } from "react";
import styles from "./header.module.css";

function Header({ logo, title, list_items, activeItem, menu_icon, close_icon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.Header}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" />
        <img src={title} alt="title" />
      </div>

      <div className={styles.button_container}>
        <img 
          src={menu_icon} 
          alt="mobile_icon" 
          className={styles.menu_icon}
          onClick={toggleMenu}
        />
        
        {isMenuOpen && (
          <div className={styles.mobile_menu_overlay}>
            <div className={styles.mobile_menu}>
              <div className={styles.menu_header}>
                <img 
                  src={close_icon} 
                  alt="close menu" 
                  className={styles.close_icon}
                  onClick={toggleMenu}
                />
              </div>
              <ul className={styles.menu_list}>  
                {list_items.map((item, index) => {
                  const isActive = item === activeItem;
                  return (
                    <li 
                      key={index} 
                      className={`${styles.mobile_list_item} ${isActive ? styles.active : ""}`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        {list_items.map((item, index) => {
          const isLast = index === list_items.length - 1;
          const isActive = item === activeItem;
          return (
            <button
              key={index}
              className={`${styles.btn} ${isLast ? styles.contact : ""} ${
                isActive ? styles.active : ""
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Header;